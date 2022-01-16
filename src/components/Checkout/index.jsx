import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'

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
        method: 'GET',
        headers: {'Content-Type': 'application/json'},
        // body: JSON.stringify({
        //   name: font.title,
        //   selectedFonts: selectedFonts,
        //   license: selectedLicense,
        // }),
      })
      const doc = await response.blob()
      // It is necessary to create a new blob object with mime-type explicitly set for all browsers except Chrome, but it works for Chrome too.
      const newBlob = new Blob([doc], {type: 'application/pdf'})

      // MS Edge and IE don't allow using a blob object directly as link href, instead it is necessary to use msSaveOrOpenBlob
      if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveOrOpenBlob(newBlob)
      } else {
        // For other browsers: create a link pointing to the ObjectURL containing the blob.
        const objUrl = window.URL.createObjectURL(newBlob)

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
        <Button type="submit" $disabled={disableCheckout()}>
          {buttonLabel}
        </Button>
      </form>
    </>
  )
}

export default CheckoutForm
