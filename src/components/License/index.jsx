import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {ParentContainer} from './styles'
import {H2} from '../../styles'
import {PriceContainer} from '../PriceBreakdown/styles'
import PriceBreakdown from '../PriceBreakdown'
import SelectionForm from '../SelectionForm'

const License = ({font}) => {
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState(null)
  const [licensePrice, setLicensePrice] = useState(0)

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
    // const updateFontPrice = () => {
    //   setFontPrice(selectedFonts && selectedFonts.length * 100)
    // }

    const updateLicensePrice = () => {
      setLicensePrice(selectedLicense && selectedLicense.price)
    }

    // updateFontPrice()
    updateLicensePrice()
  }, [selectedFonts, selectedLicense])

  return (
    <ParentContainer>
      <div>
        <H2>License this font</H2>
        <SelectionForm
          setSelectedFonts={setSelectedFonts}
          font={font}
          setSelectedLicense={setSelectedLicense}
          licenses={licenses}
          selectedLicense={selectedLicense}
        />
      </div>
      <PriceContainer>
        <PriceBreakdown
          selectedLicense={selectedLicense}
          selectedFonts={selectedFonts}
          font={font}
          licensePrice={licensePrice}
        />
      </PriceContainer>
    </ParentContainer>
  )
}

export default License
