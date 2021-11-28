import React, {useState} from 'react'
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
  console.log(selectedFonts)

  const [clickedId, setClickedId] = useState(null)

  const handleFontClick = (event, index) => {
    event.preventDefault()
    setClickedId(index)
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

  // const fontOptions = () => {
  //   let fonts = {normal: []}

  //   font.weights.map((weight) =>
  //     fonts['normal'].push({label: weight.title, value: weight.title, number: weight.number})
  //   )

  //   if (font.slants.length > 1) {
  //     fonts['italic'] = []
  //     font.weights.map((weight) =>
  //       fonts['italic'].push({
  //         label: `${weight.title} Italic`,
  //         value: `${weight.title} Italic`,
  //         number: weight.number,
  //       })
  //     )
  //   }

  //   return fonts
  // }

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
          <div className="button-group">
            {font.weights.map((weight, index) => (
              <button
                key={index}
                name={weight.title}
                onClick={(event) => handleFontClick(event, index)}
                className={index === clickedId ? 'active' : 'inactive'}
              >
                {weight.title}
              </button>
            ))}
          </div>
          {/* <ButtonGroup role="group" aria-labelledby="checkbox-group">
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
                  <SecondaryButton type="submit" key={option.label} $disabled={!selectedLicense}>
                    <label style={{cursor: 'pointer'}}>
                      <Field type="checkbox" name="fonts" value={option.value} hidden />
                      {option.label}
                    </label>
                  </SecondaryButton>
                ))}
            </Options>
          </ButtonGroup> */}
        </div>
      </form>
    </>
  )
}

export default SelectionForm
