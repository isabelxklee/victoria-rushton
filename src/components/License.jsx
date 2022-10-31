import React, {useState, useEffect} from 'react'
import sanityClient from '../client.js'
import * as Component from './componentStyle'
import * as Global from '../styles'
import PriceBreakdown from './PriceBreakdown'
import SelectionForm from './SelectionForm'
import CheckoutLinks from './CheckoutLinks'
import {licensesQuery} from '../queries'

const License = ({font, weightOptions, slantOptions}) => {
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState('Mini')
  const [selectedFonts, setSelectedFonts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [variableFont, setVariableFont] = useState(false)

  useEffect(() => {
    sanityClient
      .fetch(licensesQuery)
      .then((data) => setLicenses(data))
      .catch(console.error)
  }, [])

  const findLicenseInfo = () => {
    return licenses.filter((license) => license.title === selectedLicense)
  }

  useEffect(() => {
    setTotalPrice(
      licenses && selectedFonts && findLicenseInfo(selectedLicense)[0].price * selectedFonts.length
    )
  }, [selectedFonts, selectedLicense, licenses])

  return (
    <Component.ParentContainer>
      <Component.SelectionContainer>
        <Global.H2>License this font</Global.H2>
        <SelectionForm
          selectedFonts={selectedFonts}
          setSelectedFonts={setSelectedFonts}
          setSelectedLicense={setSelectedLicense}
          licenses={licenses}
          selectedLicense={selectedLicense}
          weightOptions={weightOptions()}
          slantOptions={slantOptions()}
          findLicenseInfo={findLicenseInfo}
        />
      </Component.SelectionContainer>
      <Component.PriceContainer>
        <Global.H3>Cart</Global.H3>
        <Global.Margin $margin="16px 0">
          <PriceBreakdown
            selectedLicense={selectedLicense}
            setSelectedFonts={setSelectedFonts}
            selectedFonts={selectedFonts}
            font={font}
            totalPrice={totalPrice}
            variableFont={variableFont}
            setVariableFont={setVariableFont}
            findLicenseInfo={findLicenseInfo}
            licenses={licenses}
          />
        </Global.Margin>
        <CheckoutLinks />
      </Component.PriceContainer>
    </Component.ParentContainer>
  )
}

export default License
