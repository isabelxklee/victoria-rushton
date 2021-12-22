import React, {useState, useEffect} from 'react'
import sanityClient from '../../client.js'
import {ParentContainer, SelectionContainer} from './styles'
import {H2} from '../../styles'
import {PriceContainer} from '../PriceBreakdown/styles'
import PriceBreakdown from '../PriceBreakdown'
import SelectionForm from '../SelectionForm'
import {licensesQuery} from '../../queries'

const License = ({font, weightOptions, slantOptions}) => {
  const [licenses, setLicenses] = useState(null)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [variableFont, setVariableFont] = useState(false)

  useEffect(() => {
    sanityClient
      .fetch(licensesQuery)
      .then((data) => setLicenses(data))
      .catch(console.error)
  }, [])

  useEffect(() => {
    setTotalPrice(selectedLicense && selectedFonts && selectedLicense.price * selectedFonts.length)
  }, [selectedFonts, selectedLicense])

  return (
    <ParentContainer>
      <SelectionContainer>
        <H2>License this font</H2>
        <SelectionForm
          selectedFonts={selectedFonts}
          setSelectedFonts={setSelectedFonts}
          font={font}
          setSelectedLicense={setSelectedLicense}
          licenses={licenses}
          selectedLicense={selectedLicense}
          weightOptions={weightOptions()}
          slantOptions={slantOptions()}
        />
      </SelectionContainer>
      <PriceContainer>
        <PriceBreakdown
          selectedLicense={selectedLicense}
          setSelectedFonts={setSelectedFonts}
          selectedFonts={selectedFonts}
          font={font}
          totalPrice={totalPrice}
          variableFont={variableFont}
          setVariableFont={setVariableFont}
        />
      </PriceContainer>
    </ParentContainer>
  )
}

export default License
