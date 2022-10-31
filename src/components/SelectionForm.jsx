import React from 'react'
import * as Component from './componentStyle'
import * as Global from '../styles'

const SelectionForm = ({
  licenses,
  selectedFonts,
  setSelectedFonts,
  setSelectedLicense,
  selectedLicense,
  weightOptions,
  slantOptions,
  findLicenseInfo,
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
        <Global.H3>Select license</Global.H3>
        <Component.LicenseContainer>
          <Component.Select
            value={selectedLicense}
            onChange={(event) => setSelectedLicense(event.target.value)}
          >
            {licenses &&
              licenseOptions().map((license) => (
                <option key={license._id} value={license.value}>
                  {license.value}
                </option>
              ))}
          </Component.Select>
          <div style={{width: '100%'}}>
            <Global.H3>For uses, not exceeding:</Global.H3>
            {licenses !== null && (
              <>
                <p>
                  {findLicenseInfo(selectedLicense)[0].desktopWorkstations} desktop workstations
                </p>
                <p>{findLicenseInfo(selectedLicense)[0].webVisitors} web visitors</p>
                <p>{findLicenseInfo(selectedLicense)[0].ebooks} apps or e-books</p>
              </>
            )}
          </div>
        </Component.LicenseContainer>

        <div style={{marginTop: '60px'}}>
          <Global.H3>Select fonts</Global.H3>
          <Component.ButtonGroup>
            <Component.Options>
              {weightOptions.map((weight) => (
                <Global.SecondaryButton
                  key={weight.value}
                  name={weight.label}
                  onClick={(event) => handleFontClick(event)}
                  className={selectedFonts.includes(weight.label) ? 'active' : 'inactive'}
                  $disabled={!selectedLicense}
                >
                  {weight.label}
                </Global.SecondaryButton>
              ))}
            </Component.Options>

            {slantOptions.length > 1 && (
              <Component.Options>
                {weightOptions.map((weight) => (
                  <Global.SecondaryButton
                    key={weight.value}
                    name={`${weight.label} Italic`}
                    onClick={(event) => handleFontClick(event)}
                    className={
                      selectedFonts.includes(`${weight.label} Italic`) ? 'active' : 'inactive'
                    }
                    $disabled={!selectedLicense}
                  >
                    {weight.label} Italic
                  </Global.SecondaryButton>
                ))}
              </Component.Options>
            )}
          </Component.ButtonGroup>
        </div>
      </form>
    </>
  )
}

export default SelectionForm
