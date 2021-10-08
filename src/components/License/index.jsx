import React, {useState, useEffect} from 'react'
import {FlexContainer, ParentContainer, LicenseContainer, SelectionContainer} from './styles'
import sanityClient from '../../client.js'
import {Button, H2, SecondaryButton} from '../../styles'
import {PriceContainer} from '../PriceBreakdown/styles'
import PriceBreakdown from '../PriceBreakdown'
import SelectionForm from '../SelectionForm'

const License = ({font}) => {
  // const [data, setData] = useState(null)
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState(null)
  const [fontPrice, setFontPrice] = useState(0)
  const [licensePrice, setLicensePrice] = useState(0)
  const [currency, setCurrency] = useState('USD')
  const [selectAllRoman, setSelectAllRoman] = useState(false)
  // const [selectAllItalic, setSelectAllItalic] = useState(false)

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

  useEffect(() => {
    // const fetchData = async () => {
    //   const response = await fetch('https://victoria-rushton-express.herokuapp.com/express-backend')
    //   // const response = await fetch('https://localhost:5000')
    //   const body = await response.json()
    //   setData(body.express)
    // }
    // fetchData()
    const updateFontPrice = () => {
      setFontPrice(selectedFonts && selectedFonts.length * 100)
    }

    const updateLicensePrice = () => {
      setLicensePrice(selectedLicense && selectedLicense.price)
    }

    updateFontPrice()
    updateLicensePrice()
  }, [selectedFonts, selectedLicense])

  return (
    // <form action="/create-checkout-session" method="POST">
    //   <button type="submit">Checkout</button>
    // </form>
    <>
      <H2>License this font</H2>
      <FlexContainer>
        <SelectionForm
          setSelectedFonts={setSelectedFonts}
          font={font}
          setSelectedLicense={setSelectedLicense}
          licenses={licenses}
          selectedLicense={selectedLicense}
        />
        {/* <ParentContainer> */}
      </FlexContainer>
      <PriceContainer>
        <PriceBreakdown
          selectedLicense={selectedLicense}
          selectedFonts={selectedFonts}
          font={font}
          currency={currency}
          fontPrice={fontPrice}
          licensePrice={licensePrice}
        />
      </PriceContainer>
      {/* </ParentContainer> */}
    </>
  )
}

export default License
