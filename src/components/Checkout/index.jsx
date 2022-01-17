import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'
import {InputField, FieldContainer, Label} from './styles'

const CheckoutForm = ({disableCheckout, selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')

  useEffect(() => {
    setButtonLabel(selectedLicense && selectedLicense.title === 'Trial' ? 'Download' : 'Checkout')
  }, [selectedLicense])

  const handleSubmit = async (event) => {
    setButtonLabel('Loading...')

    event.preventDefault()

    if (selectedLicense.title === 'Trial') {
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/download`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: font.title,
          selectedFonts: selectedFonts,
          license: selectedLicense,
        }),
      })
      const doc = await response.blob()
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(doc)
      } else {
        const objUrl = window.URL.createObjectURL(doc)

        let link = document.createElement('a')
        link.href = objUrl
        link.download = response.filename
        link.click()

        // For Firefox it is necessary to delay revoking the ObjectURL.
        setTimeout(() => {
          window.URL.revokeObjectURL(objUrl)
        }, 250)
      }

      if (!response) {
        console.log(response.error)
      }
    } else {
      const stripe = await loadStripe(process.env.REACT_APP_STRIPE_SECRET)
      const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: font.title,
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

    setButtonLabel('Checkout')
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        {selectedLicense && selectedLicense.title === 'Trial' && (
          <FieldContainer $margin="16px 0">
            <Label>Name</Label>
            <InputField type="text" name="name" required autoComplete="off" />
            <Label>Email</Label>
            <InputField type="email" name="email" required autoComplete="off" />
          </FieldContainer>
        )}

        <Button type="submit" $disabled={disableCheckout()}>
          {buttonLabel}
        </Button>
      </form>
    </>
  )
}

export default CheckoutForm
