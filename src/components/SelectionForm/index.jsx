import React from 'react'
import {Formik, Form, Field} from 'formik'
import {Button, SecondaryButton, H3} from '../../styles'
import {LicenseContainer, ButtonGroup, Options} from './styles'
import Selector from '../Selector'

const SelectionForm = ({
  font,
  licenses,
  selectedFonts,
  setSelectedFonts,
  setSelectedLicense,
  selectedLicense,
}) => {
  const licenseOptions = () => {
    return (
      licenses &&
      licenses.map((license) => ({...license, label: license.title, value: license.title}))
    )
  }

  console.log(selectedFonts)

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
              {font &&
                font.weights.map((weight) => (
                  <ButtonGroup role="group" aria-labelledby="checkbox-group">
                    <Options>
                      <Button type="submit" key={weight.number} $disabled={!selectedLicense}>
                        <label style={{cursor: 'pointer'}}>
                          <Field type="checkbox" name="fonts" value={weight.title} hidden />
                          {weight.title}
                        </label>
                      </Button>
                    </Options>
                    <Options>
                      {font.slants.length > 1 && (
                        <SecondaryButton
                          type="submit"
                          key={weight.number}
                          $disabled={!selectedLicense}
                        >
                          <label style={{cursor: 'pointer'}}>
                            <Field
                              type="checkbox"
                              name="fonts"
                              value={`${weight.title} Italic`}
                              hidden
                            />
                            {weight.title} Italic
                          </label>
                        </SecondaryButton>
                      )}
                    </Options>
                  </ButtonGroup>
                ))}
            </div>
          </Form>
        )}
      </Formik>
    </>
  )
}

export default SelectionForm
