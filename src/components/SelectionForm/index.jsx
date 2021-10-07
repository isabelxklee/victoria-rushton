import React from 'react'
import {Formik, Field, Form} from 'formik'
import {Button} from '../../styles'
import Selector from '../Selector'

const SelectionForm = ({font, licenses, setSelectedFonts, setSelectedLicense}) => {
  const findLicense = (pickedLicense) => {
    let licenseValue = licenses && licenses.filter((license) => license.title === pickedLicense)
    setSelectedLicense(licenseValue[0])
  }

  const allRomanWeights = () => {
    return font.weights.map((weight) => weight.title)
  }

  const licenseOptions = () => {
    return (
      licenses &&
      licenses.map((license) => ({...license, label: license.title, value: license.title}))
    )
  }

  return (
    <>
      <Formik
        initialValues={{
          allRoman: false,
          fonts: [],
          license: {},
        }}
        onSubmit={(values) => {
          findLicense(values.license)
          setSelectedFonts(values.allRoman ? allRomanWeights : values.fonts)
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
            {font.slants.length > 1 && (
              <Button type="submit">
                <label>
                  <Field type="checkbox" name="allRoman" hidden />
                  Select All Roman
                </label>
              </Button>
            )}

            <h3>Select license</h3>
            <Selector
              title="License"
              options={licenseOptions()}
              defaultValue={'Small'}
              handleChange={setSelectedLicense}
            />
            {/* <div role="group" aria-labelledby="radio-group">
              {licenses &&
                licenses.map((license) => (
                  <Button type="submit" key={license._id}>
                    <label>
                      <Field type="radio" name="license" value={license.title} hidden />
                      {license.title}
                    </label>
                  </Button>
                ))}
            </div> */}
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
