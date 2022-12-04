import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import * as Component from '../../styles/component-styles'
import * as Global from '../../styles/global-styles'
import PriceBreakdown from '../PriceBreakdown'
import SelectionForm from '../SelectionForm'
import CheckoutLinks from '../CheckoutLinks'
import LoadingComponent from '../Loading'

const License = () => {
  const licenses = useSelector((state) => state.licenses.value)
  const [selectedLicense, setSelectedLicense] = useState(null)
  const [selectedFonts, setSelectedFonts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [variableFont, setVariableFont] = useState(false)

  useEffect(() => {
    if (!selectedLicense) {
      setSelectedLicense(licenses[0])
    }

    setTotalPrice(selectedFonts && selectedLicense && selectedLicense.price * selectedFonts.length)
  }, [selectedFonts, selectedLicense, licenses])

  return (
    <Component.ParentContainer>
      <Component.SelectionContainer>
        <Global.H2>License this font</Global.H2>
        {selectedLicense ? (
          <SelectionForm
            selectedFonts={selectedFonts}
            setSelectedFonts={setSelectedFonts}
            setSelectedLicense={setSelectedLicense}
            selectedLicense={selectedLicense}
          />
        ) : (
          <LoadingComponent />
        )}
      </Component.SelectionContainer>
      <Component.PriceContainer>
        <Global.H3>Cart</Global.H3>
        <Global.Margin $margin="16px 0">
          {selectedLicense ? (
            <PriceBreakdown
              selectedLicense={selectedLicense}
              setSelectedFonts={setSelectedFonts}
              selectedFonts={selectedFonts}
              totalPrice={totalPrice}
              variableFont={variableFont}
              setVariableFont={setVariableFont}
            />
          ) : (
            <LoadingComponent />
          )}
        </Global.Margin>
        <CheckoutLinks />
      </Component.PriceContainer>
    </Component.ParentContainer>
  )
}

export default License
