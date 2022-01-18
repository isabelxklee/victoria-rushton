import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'
import FormikForm from '../FormikForm'

const CheckoutForm = ({selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')

  useEffect(() => {
    setButtonLabel(selectedLicense && selectedLicense.title === 'Trial' ? 'Download' : 'Checkout')
  }, [selectedLicense])

  const handleSubmit = async (event) => {
    setButtonLabel('Loading...')

    event.preventDefault()

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_SECRET)
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        font: font.title,
        selectedFonts: selectedFonts,
        license: selectedLicense,
      }),
    })
      .then((r) => r.json())
      .then((session) => stripe.redirectToCheckout({sessionId: session.id}))

    if (!response) {
      console.log(response.error)
    }
  }

  return (
    <>
      {selectedLicense && selectedLicense.title === 'Trial' ? (
        <FormikForm selectedLicense={selectedLicense} selectedFonts={selectedFonts} font={font} />
      ) : (
        <form onSubmit={handleSubmit}>
          <Button type="submit" $disabled={!selectedLicense || selectedFonts.length < 1}>
            {buttonLabel}
          </Button>
        </form>
      )}
    </>
  )
}

export default CheckoutForm
