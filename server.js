require("dotenv").config();
const express = require("express");
const app = express();
app.use(express.static("public"));
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");
const stripe = require("stripe")(process.env.SECRET_STRIPE_KEY);
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post("/create-checkout-session", async (req, res) => {
  const data = req.body;

  console.log(req.body);

  // const transformLineItems = () => {
  //   data.fonts.map((font) => {
  //     return {
  //       price_data: {
  //         currency: "usd",
  //         product_data: {
  //           name: font,
  //         },
  //         unit_amount: data.license.price,
  //       },
  //     };
  //   });
  // };

  const session = await stripe.checkout.sessions.create({
    // line_items: transformLineItems(),
    line_items: [
      {
        price_data: {
          currency: "usd",
          product_data: {
            name: data.name,
          },
          unit_amount: data.price,
        },
      },
    ],
    mode: "payment",
    success_url: "https://example.com/success",
    cancel_url: "https://example.com/cancel",
  });

  res.json(session);
});

// app.use(express.static(path.join(__dirname, "../client/build")));

app.listen(port, () => console.log(`Listening on port ${port}!`));
