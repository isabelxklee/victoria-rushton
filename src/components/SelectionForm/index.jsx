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
            <p>{selectedLicense ? selectedLicense.ebooks : 0} e-book(s)</p>
          </div>
        </LicenseContainer>

        <div style={{marginTop: '60px'}}>
          <H3>Select fonts</H3>
          <ButtonGroup>
            <Options>
              {font.weights.map((weight) => (
                <SecondaryButton
                  key={weight.number}
                  name={weight.title}
                  onClick={(event) => handleFontClick(event)}
                  className={selectedFonts.includes(weight.title) ? 'active' : 'inactive'}
                  $disabled={!selectedLicense}
                >
                  {weight.title}
                </SecondaryButton>
              ))}
            </Options>

            {font.slants.length > 1 && (
              <Options>
                {font.weights.map((weight) => (
                  <SecondaryButton
                    key={weight.number}
                    name={`${weight.title} Italic`}
                    onClick={(event) => handleFontClick(event)}
                    className={
                      selectedFonts.includes(`${weight.title} Italic`) ? 'active' : 'inactive'
                    }
                    $disabled={!selectedLicense}
                  >
                    {weight.title} Italic
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
