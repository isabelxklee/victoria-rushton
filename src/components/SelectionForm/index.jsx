import React from 'react'
import {Formik, Field, Form} from 'formik'
import {Button} from '../../styles'

const SelectionForm = ({font, licenses, setSelectedFonts, setSelectedLicense}) => {
  const findLicense = (pickedLicense) => {
    let licenseValue = licenses && licenses.filter((license) => license.title === pickedLicense)
    setSelectedLicense(licenseValue[0])
  }

  return (
    <>
      <Formik
        initialValues={{
          fonts: [],
          license: {},
        }}
        onSubmit={(values) => {
          findLicense(values.license)
          setSelectedFonts(values.fonts)
        }}
      >
        {({values}) => (
          <Form>
            <h3>Select fonts</h3>
            <div role="group" aria-labelledby="checkbox-group">
              {font &&
                font.weights.map((weight) => (
                  <Button type="submit" key={weight.number}>
                    <label>
                      <Field type="checkbox" name="fonts" value={weight.title} hidden />
                      {weight.title}
                    </label>
                  </Button>
                ))}
            </div>

            <h3>Select license</h3>
            <div role="group" aria-labelledby="radio-group">
              {licenses &&
                licenses.map((license) => (
                  <Button type="submit" key={license._id}>
                    <label>
                      <Field type="radio" name="license" value={license.title} hidden />
                      {license.title}
                    </label>
                  </Button>
                ))}
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
