import React from 'react'
import {Formik, Field, Form} from 'formik'
import {Button, SecondaryButton, H3} from '../../styles'
import {LicenseContainer, ButtonGroup} from './styles'
import Selector from '../Selector'

const SelectionForm = ({font, licenses, setSelectedFonts, setSelectedLicense, selectedLicense}) => {
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
        }}
        onSubmit={(values) => {
          setSelectedFonts(values.allRoman ? allRomanWeights : values.fonts)
        }}
      >
        {({values}) => (
          <Form>
            <H3>Select fonts</H3>
            <ButtonGroup role="group" aria-labelledby="checkbox-group">
              {font &&
                font.weights.map((weight) => (
                  <SecondaryButton type="submit" key={weight.number}>
                    <label style={{cursor: 'pointer'}}>
                      <Field type="checkbox" name="fonts" value={weight.title} hidden />
                      {weight.title}
                    </label>
                  </SecondaryButton>
                ))}
            </ButtonGroup>

            <div style={{marginTop: '60px'}}>
              <H3>Select license</H3>
              <LicenseContainer>
                <Selector
                  displayTitle={false}
                  title="License"
                  options={licenseOptions()}
                  defaultValue={'Small'}
                  handleChange={setSelectedLicense}
                />
                <div style={{width: '100%'}}>
                  <H3>For uses, not exceeding:</H3>
                  <p>
                    {selectedLicense ? selectedLicense.desktopWorkstations : 0} desktop workstations
                  </p>
                  <p>{selectedLicense ? selectedLicense.webVisitors : 0} web visitors</p>
                  <p>{selectedLicense ? selectedLicense.ebooks : 0} e-book(s)</p>
                </div>
              </LicenseContainer>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
