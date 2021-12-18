import React from 'react'
import {SecondaryButton, H3} from '../../styles'
import {LicenseContainer, ButtonGroup, Options} from './styles'
import Selector from '../Selector'

const SelectionForm = ({
  font,
  licenses,
  selectedFonts,
  setSelectedFonts,
  setSelectedLicense,
  selectedLicense,
  weightOptions,
  slantOptions,
}) => {
  const handleFontClick = (event) => {
    event.preventDefault()
    setSelectedFonts((selectedFonts) =>
      selectedFonts.includes(event.target.name)
        ? selectedFonts.filter((font) => font !== event.target.name)
        : [...selectedFonts, event.target.name]
    )
  }

  const licenseOptions = () => {
    return (
      licenses &&
      licenses.map((license) => ({...license, label: license.title, value: license.title}))
    )
  }

  return (
    <>
      <form>
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
            <p>{selectedLicense ? selectedLicense.desktopWorkstations : 0} desktop workstations</p>
            <p>{selectedLicense ? selectedLicense.webVisitors : 0} web visitors</p>
            <p>{selectedLicense ? selectedLicense.ebooks : 0} apps or e-books</p>
          </div>
        </LicenseContainer>

        <div style={{marginTop: '60px'}}>
          <H3>Select fonts</H3>
          <ButtonGroup>
            <Options>
              {weightOptions.map((weight) => (
                <SecondaryButton
                  key={weight.value}
                  name={weight.label}
                  onClick={(event) => handleFontClick(event)}
                  className={selectedFonts.includes(weight.label) ? 'active' : 'inactive'}
                  $disabled={!selectedLicense}
                >
                  {weight.label}
                </SecondaryButton>
              ))}
            </Options>

            {slantOptions.length > 1 && (
              <Options>
                {weightOptions.map((weight) => (
                  <SecondaryButton
                    key={weight.value}
                    name={`${weight.label} Italic`}
                    onClick={(event) => handleFontClick(event)}
                    className={
                      selectedFonts.includes(`${weight.label} Italic`) ? 'active' : 'inactive'
                    }
                    $disabled={!selectedLicense}
                  >
                    {weight.label} Italic
                  </SecondaryButton>
                ))}
              </Options>
            )}
          </ButtonGroup>
        </div>
      </form>
    </>
  )
}

export default SelectionForm
