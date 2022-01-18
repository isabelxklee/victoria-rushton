import React, {useState, useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {Button} from '../../styles'
import {InputField, FieldContainer, Label, Error} from './styles'
import {Formik, Form} from 'formik'
import * as Yup from 'yup'

const FormikForm = ({selectedLicense, selectedFonts, font}) => {
  const [buttonLabel, setButtonLabel] = useState('Checkout')
  let history = useHistory()

  const formSchema = Yup.object().shape({
    name: Yup.string().required('This is a required field.'),
    email: Yup.string()
      .email('Please enter a valid email address.')
      .required('This is a required field.'),
  })

  useEffect(() => {
    setButtonLabel(
      selectedLicense && selectedLicense.title === 'Trial' ? 'Send trial fonts' : 'Checkout'
    )
  }, [selectedLicense])

  const handleSubmit = async (values) => {
    setButtonLabel('Loading...')

    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/download-trial-fonts`, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        font: font.title,
        selectedFonts: selectedFonts,
        license: selectedLicense,
        customerName: values.name,
        customerEmail: values.email,
      }),
    })

    if (!response) {
      console.log(response.error)
    }

    setTimeout(() => {
      history.push('/success')
    }, 900)
  }

  return (
    <>
      <Formik
        initialValues={{name: '', email: ''}}
        validationSchema={formSchema}
        onSubmit={(values) => {
          handleSubmit(values)
        }}
      >
        {({errors, touched, isValid, dirty}) => (
          <>
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
          </>
        )}
      </Formik>
    </>
  )
}

export default FormikForm
