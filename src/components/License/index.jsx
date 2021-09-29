import React, {useState, useEffect, useRef} from 'react'
import {ButtonContainer} from './styles'
import sanityClient from '../../client.js'
import {Button} from '../../styles'
import PriceBreakdown from '../PriceBreakdown'

const License = ({font}) => {
  // const [data, setData] = useState(null)
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState(null)
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
    const weightObject = {weight: weight.title}
    setSelectedFonts(weightObject)
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
    <>
      <h2>License this font</h2>
      <h3>Select weight</h3>
      <ButtonContainer>
        <div>
          {font &&
            font.weights.map((weight) => (
              <Button key={weight._id} onClick={() => handleChangeSingle(weight)}>
                {weight.title}
              </Button>
            ))}
          <Button onClick={handleChangeAll}>
            {font.slants.length === 1 ? 'Select all' : 'Select all Roman'}
          </Button>
        </div>
        <div>
          {font.slants.includes('Italic') &&
            font.weights.map((weight) => <button key={weight._id}>{weight.title} Italic</button>)}
          <button>Select all Italic</button>
        </div>
      </ButtonContainer>
      <h3>Select license</h3>
      {licenses &&
        licenses.map((license) => (
          <Button key={license._id} onClick={() => handleLicenseChange(license)}>
            {license.title}
          </Button>
        ))}
      <h3>For uses, not exceeding:</h3>
      {selectedLicense && (
        <>
          <p>{selectedLicense.desktopWorkstations} desktop workstations</p>
          <p>{selectedLicense.webVisitors} web visitors</p>
          <p>{selectedLicense.ebooks} e-book(s)</p>
        </>
      )}
      <PriceBreakdown
        selectedLicense={selectedLicense}
        selectedFonts={selectedFonts}
        totalPrice={totalPrice}
        font={font}
        currency={currency}
      />
    </>
  )
}

export default License
