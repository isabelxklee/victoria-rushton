import React, {useState} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'

const CheckoutForm = ({disableCheckout, selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')

  const handleSubmit = async (event) => {
    setButtonLabel('Loading...')

    event.preventDefault()

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_SECRET)
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: font,
        weights: selectedFonts,
        license: selectedLicense,
      }),
    })
      .then((r) => r.json())
      .then((session) => stripe.redirectToCheckout({sessionId: session.id}))

    if (!response) {
      console.log(response.error)
    }

    setButtonLabel('Checkout')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Button type="submit" $disabled={disableCheckout()}>
          {buttonLabel}
        </Button>
      </form>
    </>
  )
}

export default CheckoutForm
