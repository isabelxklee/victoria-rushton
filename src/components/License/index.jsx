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
  const [selectedFonts, setSelectedFonts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

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
    setTotalPrice(selectedLicense && selectedFonts && selectedLicense.price * selectedFonts.length)
  }, [selectedFonts, selectedLicense])

  return (
    <ParentContainer>
      <div>
        <H2>License this font</H2>
        <SelectionForm
          selectedFonts={selectedFonts}
          setSelectedFonts={setSelectedFonts}
          font={font}
          setSelectedLicense={setSelectedLicense}
          licenses={licenses}
          selectedLicense={selectedLicense}
        />
      </div>
      {/* <PriceContainer>
        <PriceBreakdown
          selectedLicense={selectedLicense}
          setSelectedFonts={setSelectedFonts}
          selectedFonts={selectedFonts}
          font={font}
          totalPrice={totalPrice}
        />
      </PriceContainer> */}
    </ParentContainer>
  )
}

export default License
