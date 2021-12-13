require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.static("public"));
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);
const port = process.env.PORT;
const domain = process.env.DOMAIN;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  const data = req.body;

  const transformLineItems = () => {
    const fontLineItems = data.weights.map((weight) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: `${data.name} ${weight}`,
          },
          unit_amount: data.license.price * 100,
        },
        quantity: 1,
      };
    });

    const licenseLineItem = {
      price_data: {
        currency: "usd",
        product_data: {
          name: `${data.license.title} License`,
        },
        unit_amount: 0,
      },
      quantity: 1,
    };

    return [licenseLineItem, ...fontLineItems];
  };

  console.log(transformLineItems());

  const session = await stripe.checkout.sessions.create({
    line_items: transformLineItems(),
    mode: "payment",
    success_url: `${domain}`,
    cancel_url: "https://example.com/cancel",
  });

  res.json(session);
});

// app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => console.log(`Listening on port ${port}!`));
