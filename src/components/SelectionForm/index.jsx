import React from 'react'
import {Formik, Form, Field} from 'formik'
import {Button, SecondaryButton, H3} from '../../styles'
import {LicenseContainer, ButtonGroup, Options} from './styles'
import Selector from '../Selector'

const SelectionForm = ({font, licenses, setSelectedFonts, setSelectedLicense, selectedLicense}) => {
  const licenseOptions = () => {
    return (
      licenses &&
      licenses.map((license) => ({...license, label: license.title, value: license.title}))
    )
  }

  const fontOptions = () => {
    let fonts = {normal: []}

    font.weights.map((weight) =>
      fonts['normal'].push({label: weight.title, value: weight.title, number: weight.number})
    )

    if (font.slants.length > 1) {
      fonts['italic'] = []
      font.weights.map((weight) =>
        fonts['italic'].push({
          label: `${weight.title} Italic`,
          value: `${weight.title} Italic`,
          number: weight.number,
        })
      )
    }

    return fonts
  }

  return (
    <>
      <Formik
        initialValues={{
          fonts: [],
        }}
        onSubmit={(values) => {
          setSelectedFonts(values.fonts)
        }}
      >
        {({values}) => (
          <Form>
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

            <div style={{marginTop: '60px'}}>
              <H3>Select fonts</H3>
              <ButtonGroup role="group" aria-labelledby="checkbox-group">
                <Options>
                  {font &&
                    fontOptions()['normal'].map((option) => (
                      <Button type="submit" key={option.label} $disabled={!selectedLicense}>
                        <label style={{cursor: 'pointer'}}>
                          <Field type="checkbox" name="fonts" value={option.value} hidden />
                          {option.label}
                        </label>
                      </Button>
                    ))}
                </Options>

                <Options>
                  {fontOptions()['italic'] &&
                    fontOptions()['italic'].map((option) => (
                      <SecondaryButton
                        type="submit"
                        key={option.label}
                        $disabled={!selectedLicense}
                      >
                        <label style={{cursor: 'pointer'}}>
                          <Field type="checkbox" name="fonts" value={option.value} hidden />
                          {option.label}
                        </label>
                      </SecondaryButton>
                    ))}
                </Options>
              </ButtonGroup>
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
