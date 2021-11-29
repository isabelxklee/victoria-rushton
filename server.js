const stripe = require('stripe')('sk_test_4eC39HqLyjWDarjtT1zdp7dc')
const express = require('express')
const app = express()
app.use(express.static('public'))

// const YOUR_DOMAIN = 'https://victoria-rushton.netlify.app'
const YOUR_DOMAIN = 'http://localhost:4242'

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    line_items: [
      {
        price_data: {
          currency: 'usd',
          product_data: {
            name: 'T-shirt',
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}/success`,
    cancel_url: `${YOUR_DOMAIN}/cancel`,
  })
  console.log(session)

  res.redirect(303, session.url)
})

app.listen(4242, () => console.log('Running on port 4242'))
