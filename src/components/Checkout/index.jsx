import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'
import {InputField, FieldContainer, Label} from './styles'
import {Formik, Form, Field, ErrorMessage} from 'formik'
import * as Yup from 'yup'

const CheckoutForm = ({selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const formSchema = Yup.object().shape({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  })

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
        validationSchema={formSchema}
        onSubmit={(values) => console.log(values)}
      >
        {({errors, touched}) => (
          <>
            {selectedLicense && selectedLicense.title === 'Trial' ? (
              <Form onSubmit={handleSubmit}>
                <FieldContainer>
                  <Label>Name</Label>
                  <InputField type="name" name="name" autoComplete="off" />
                  {errors.name && touched.name && <ErrorMessage name="name" />}
                  <Label>Email address</Label>
                  <InputField type="email" name="email" autoComplete="off" />
                  {errors.email && touched.email && <ErrorMessage name="email" />}
                </FieldContainer>
                <Button type="submit" $disabled={errors.name && errors.email}>
                  {buttonLabel}
                </Button>
              </Form>
            ) : (
              <Button type="submit" $disabled={disableCheckout()}>
                {buttonLabel}
              </Button>
            )}
          </>
        )}
      </Formik>
    </>
  )
}

export default CheckoutForm
