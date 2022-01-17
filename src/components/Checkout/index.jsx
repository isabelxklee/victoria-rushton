import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'
import {InputField, FieldContainer, Label} from './styles'
import {Formik, Form, Field, ErrorMessage} from 'formik'

const CheckoutForm = ({selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  useEffect(() => {
    setButtonLabel(selectedLicense && selectedLicense.title === 'Trial' ? 'Download' : 'Checkout')
  }, [selectedLicense])

  const disableCheckout = () => {
    if (!selectedLicense) {
      return true
    } else if (!selectedFonts) {
      return true
    } else if (selectedFonts.length < 1) {
      return true
    }
  }

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
      <Formik
        initialValues={{name: '', email: ''}}
        validate={(values) => {
          const errors = {}
          if (!values.email) {
            errors.email = 'Required'
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address'
          }
          return errors
        }}
        onSubmit={(values, {setSubmitting}) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
          }, 400)
        }}
      >
        {({isSubmitting}) => (
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>

      {/* <form onSubmit={handleSubmit}>
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
      </form> */}
    </>
  )
}

export default CheckoutForm
