import React, {useState, useEffect} from 'react'
import {
  FlexContainer,
  ParentContainer,
  LicenseContainer,
  Options,
  SelectionContainer,
} from './styles'
import sanityClient from '../../client.js'
import {Button, SecondaryButton, Margin} from '../../styles'
import {PriceContainer} from '../PriceBreakdown/styles'
import PriceBreakdown from '../PriceBreakdown'

const License = ({font}) => {
  // const [data, setData] = useState(null)
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [currency, setCurrency] = useState('USD')
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
    setSelectedLicense(license)
    setTotalPrice((totalPrice) => (totalPrice += license.price))
  }

  const handleChangeSingle = (weight) => {
    const fontWeight = weight.title

    setSelectedFonts((selectedFonts) =>
      selectedFonts.includes(fontWeight)
        ? selectedFonts.filter((weight) => weight !== fontWeight)
        : [...selectedFonts, fontWeight]
    )

    setTotalPrice((totalPrice) =>
      selectedFonts.includes(fontWeight) ? (totalPrice -= 100) : (totalPrice += 100)
    )
  }

  const handleChangeAll = () => {
    const allRegularWeights = []
    font.weights.map((weight) => allRegularWeights.push({weight: weight.title}))

    setSelectedFonts(
      selectedFonts && selectedFonts.length === font.weights.length ? null : allRegularWeights
    )

    setTotalPrice((totalPrice) =>
      selectedFonts && selectedFonts.length === font.weights.length
        ? (totalPrice -= 450)
        : (totalPrice += 450)
    )
  }

  return (
    // <form action="/create-checkout-session" method="POST">
    //   <button type="submit">Checkout</button>
    // </form>
    <Margin $margin="100px 0">
      <h2>License this font</h2>
      <ParentContainer>
        <div>
          <SelectionContainer>
            <h3>Select weight</h3>
            <FlexContainer>
              <Options>
                {font &&
                  font.weights.map((weight) => (
                    <SecondaryButton key={weight._id} onClick={() => handleChangeSingle(weight)}>
                      {weight.title}
                    </SecondaryButton>
                  ))}
                <Button onClick={handleChangeAll}>
                  {font.slants.length === 1 ? 'Select all' : 'Select all Roman'}
                </Button>
              </Options>
              <Options>
                {font.slants.includes('Italic') && (
                  <>
                    {font.weights.map((weight) => (
                      <SecondaryButton key={weight._id}>{weight.title} Italic</SecondaryButton>
                    ))}
                    <Button>Select all Italic</Button>
                  </>
                )}
              </Options>
            </FlexContainer>
          </SelectionContainer>
          <LicenseContainer>
            <Options>
              <h3>Select license</h3>
              {licenses &&
                licenses.map((license) => (
                  <SecondaryButton key={license._id} onClick={() => handleLicenseChange(license)}>
                    {license.title}
                  </SecondaryButton>
                ))}
            </Options>
            <div style={{width: '100%'}}>
              <h3>For uses, not exceeding:</h3>
              {selectedLicense && (
                <>
                  <p>{selectedLicense.desktopWorkstations} desktop workstations</p>
                  <p>{selectedLicense.webVisitors} web visitors</p>
                  <p>{selectedLicense.ebooks} e-book(s)</p>
                </>
              )}
            </div>
          </LicenseContainer>
        </div>
        <PriceContainer>
          <PriceBreakdown
            selectedLicense={selectedLicense}
            selectedFonts={selectedFonts}
            totalPrice={totalPrice}
            font={font}
            currency={currency}
          />
        </PriceContainer>
      </ParentContainer>
    </Margin>
  )
}

export default License
