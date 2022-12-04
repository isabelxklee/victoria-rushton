import React from 'react'
import {useSelector} from 'react-redux'
import * as Component from '../../styles/component-styles'
import * as Global from '../../styles/global-styles'

const SelectionForm = ({selectedFonts, setSelectedFonts, setSelectedLicense, selectedLicense}) => {
  const licenses = useSelector((state) => state.licenses.value)
  const currentFont = useSelector((state) => state.currentFont.value)

  const handleFontClick = (event) => {
    event.preventDefault()
    setSelectedFonts((selectedFonts) =>
      selectedFonts.includes(event.target.name)
        ? selectedFonts.filter((font) => font !== event.target.name)
        : [...selectedFonts, event.target.name]
    )
  }

  const handleLicenseClick = (event) => {
    event.preventDefault()
    let data = licenses.filter((license) => license.title === event.target.value)
    setSelectedLicense(data[0])
  }

  return (
    <>
      <form>
        <Component.LicenseContainer>
          <div style={{marginBottom: '40px'}}>
            <Global.H3>Select license</Global.H3>
            <Component.Select
              value={selectedLicense.title}
              onChange={(event) => handleLicenseClick(event)}
              $width="fixed"
            >
              {licenses.map((license) => (
                <option key={license._id} value={license.title}>
                  {license.title}
                </option>
              ))}
            </Component.Select>
          </div>
          <div>
            <Global.H3>For uses, not exceeding:</Global.H3>

            <>
              <p>{selectedLicense.desktopWorkstations} desktop workstations</p>
              <p>{selectedLicense.webVisitors} web visitors</p>
              <p>{selectedLicense.ebooks} apps or e-books</p>
            </>
          </div>
        </Component.LicenseContainer>

        <div style={{marginTop: '60px'}}>
          <Global.H3>Select fonts</Global.H3>
          <Component.ButtonGroup>
            <Component.Options>
              {currentFont.weights.map((weight) => (
                <Global.SecondaryButton
                  key={weight.title}
                  name={weight.title}
                  onClick={(event) => handleFontClick(event)}
                  className={selectedFonts.includes(weight.title) ? 'active' : 'inactive'}
                  $disabled={!selectedLicense}
                >
                  {weight.title}
                </Global.SecondaryButton>
              ))}
            </Component.Options>

            {currentFont.slants.length > 1 && (
              <Component.Options>
                {currentFont.weights.map((weight) => (
                  <Global.SecondaryButton
                    key={weight.title}
                    name={`${weight.title} Italic`}
                    onClick={(event) => handleFontClick(event)}
                    className={
                      selectedFonts.includes(`${weight.title} Italic`) ? 'active' : 'inactive'
                    }
                    $disabled={!selectedLicense}
                  >
                    {weight.title} Italic
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
