import React, {useState, useEffect} from 'react'
import {loadStripe} from '@stripe/stripe-js'
import {Button} from '../../styles'
import {InputField, FieldContainer, Label, Error} from './styles'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

const CheckoutForm = ({selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')

  const formSchema = Yup.object().shape({
    name: Yup.string().required('This is a required field.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('This is a required field.'),
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

  const handleSubmit = async (values) => {
    setButtonLabel('Loading...')
    let slug = ''

    selectedLicense.title === 'Trial'
      ? (slug = 'download-trial-fonts')
      : (slug = 'create-checkout-session')

    //   const stripe = await loadStripe(process.env.REACT_APP_STRIPE_SECRET)
    //   const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/create-checkout-session`, {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify({
    //       name: font.title,
    //       selectedFonts: selectedFonts,
    //       license: selectedLicense,
    //     }),
    //   })
    //     .then((r) => r.json())
    //     .then((session) => stripe.redirectToCheckout({sessionId: session.id}))

    //   if (!response) {
    //     console.log(response.error)
    //   }
    // }

    const stripe = await loadStripe(process.env.REACT_APP_STRIPE_SECRET)
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/${slug}`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: font.title,
        selectedFonts: selectedFonts,
        license: selectedLicense,
        customerName: values.name,
        customerEmail: values.email,
      }),
    })
      .then((r) => r.json())
      .then(
        (session) =>
          slug === 'create-checkout-session' && stripe.redirectToCheckout({sessionId: session.id})
      )

    if (!response) {
      console.log(response.error)
    }

    setButtonLabel('Checkout')
  }

  return (
    <>
      <Formik
        initialValues={{name: '', email: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => handleSubmit(values)}
      >
        {({errors, touched, isValid, dirty}) => (
          <>
            {selectedLicense && selectedLicense.title === 'Trial' ? (
              <Form>
                <FieldContainer>
                  <Label>Name</Label>
                  <InputField type="name" name="name" autoComplete="off" />
                  {errors.name && touched.name && <Error name="name">{errors.name}</Error>}
                  <Label>Email address</Label>
                  <InputField type="email" name="email" autoComplete="off" />
                  {errors.email && touched.email && <Error name="email">{errors.email}</Error>}
                </FieldContainer>
                <Button type="submit" $disabled={!(isValid && dirty)}>
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
