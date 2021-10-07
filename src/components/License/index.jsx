import React, {useState, useEffect} from 'react'
import {
  FlexContainer,
  ParentContainer,
  LicenseContainer,
  Options,
  SelectionContainer,
} from './styles'
import sanityClient from '../../client.js'
import {Button, H2, SecondaryButton} from '../../styles'
import {PriceContainer} from '../PriceBreakdown/styles'
import PriceBreakdown from '../PriceBreakdown'

const FontSelection = ({font}) => {
  return (
    <>
      <h3>Select weights</h3>
      <FlexContainer>
        <Options>
          {font.weights.map((weight) => (
            <label key={weight.title}>
              {weight.title}
              <input type="checkbox" name="font" />
            </label>
            // <SecondaryButton key={weight._id} onClick={() => handleChangeSingleFont(weight)}>
            //   {weight.title}
            // </SecondaryButton>
          ))}
          {/* {font &&
            font.weights.map((weight) => (
              <SecondaryButton key={weight._id} onClick={() => handleChangeSingleFont(weight)}>
                {weight.title}
              </SecondaryButton>
            ))} */}
          {/* <Button onClick={handleChangeAllRoman}>
            {font.slants.length === 1 ? 'Select all' : 'Select all Roman'}
          </Button> */}
        </Options>
        {/* <Options>
          {font.slants.includes('Italic') && (
            <>
              {font.weights.map((weight) => (
                <SecondaryButton key={weight._id}>{weight.title} Italic</SecondaryButton>
              ))}
              <Button>Select all Italic</Button>
            </>
          )}
        </Options> */}
      </FlexContainer>
    </>
  )
}

const License = ({font}) => {
  // const [data, setData] = useState(null)
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState([])
  const [fontPrice, setFontPrice] = useState(0)
  const [licensePrice, setLicensePrice] = useState(0)
  const [currency, setCurrency] = useState('USD')
  const [selectAllRoman, setSelectAllRoman] = useState(false)
  // const [selectAllItalic, setSelectAllItalic] = useState(false)
  // const buttonEl = useRef(false)

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "license"] | order(order){
            _id,
            order,
            title,
            price,
            desktopWorkstations,
            webVisitors,
            ebooks
        }`
      )
      .then((data) => setLicenses(data))
      .catch(console.error)
  }, [])

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://victoria-rushton-express.herokuapp.com/express-backend')
  //     // const response = await fetch('https://localhost:5000')
  //     const body = await response.json()
  //     setData(body.express)
  //   }

  //   fetchData()
  // }, [])

  const handleLicenseChange = (license) => {
    setSelectedLicense(() => (selectedLicense === license ? null : license))
    setLicensePrice(selectedLicense === license ? 0 : license.price)
  }

  const handleChangeSingleFont = (weight) => {
    const fontWeight = weight.title

    setSelectedFonts((selectedFonts) =>
      selectedFonts.includes(fontWeight)
        ? selectedFonts.filter((weight) => weight !== fontWeight)
        : [...selectedFonts, fontWeight]
    )

    setFontPrice((fontPrice) =>
      selectedFonts.includes(fontWeight) ? (fontPrice -= 100) : (fontPrice += 100)
    )
  }

  const handleChangeAllRoman = () => {
    const allRoman = font.weights.map((weight) => weight.title)

    setSelectAllRoman((selectAllRoman) => !selectAllRoman)
    setSelectedFonts(selectAllRoman ? [] : [...allRoman])
    setFontPrice((fontPrice) => (selectAllRoman ? 0 : (fontPrice += 450)))
  }

  return (
    // <form action="/create-checkout-session" method="POST">
    //   <button type="submit">Checkout</button>
    // </form>
    <>
      <H2>License this font</H2>
      <ParentContainer>
        <div>
          <SelectionContainer>
            <FontSelection font={font} />
          </SelectionContainer>
          <h3>Select a license</h3>
          <LicenseContainer>
            <Options>
              {licenses &&
                licenses.map((license) => (
                  <SecondaryButton key={license._id} onClick={() => handleLicenseChange(license)}>
                    {license.title}
                  </SecondaryButton>
                ))}
            </Options>
            <div style={{width: '100%'}}>
              <h3>For uses, not exceeding:</h3>
              <p>
                {selectedLicense ? selectedLicense.desktopWorkstations : 0} desktop workstations
              </p>
              <p>{selectedLicense ? selectedLicense.webVisitors : 0} web visitors</p>
              <p>{selectedLicense ? selectedLicense.ebooks : 0} e-book(s)</p>
            </div>
          </LicenseContainer>
        </div>
        <PriceContainer>
          <PriceBreakdown
            selectedLicense={selectedLicense}
            selectedFonts={selectedFonts}
            totalPrice={fontPrice + licensePrice}
            font={font}
            currency={currency}
            fontPrice={fontPrice}
            licensePrice={licensePrice}
          />
        </PriceContainer>
      </ParentContainer>
    </>
  )
}

export default License
