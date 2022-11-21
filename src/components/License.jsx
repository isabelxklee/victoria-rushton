import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import * as Component from '../styles/component-styles'
import * as Global from '../styles/global-styles'
import PriceBreakdown from './PriceBreakdown'
import SelectionForm from './SelectionForm'
import CheckoutLinks from './CheckoutLinks'

const License = ({font, weightOptions}) => {
  const licenses = useSelector((state) => state.licenses.value)
  const [selectedLicense, setSelectedLicense] = useState('Mini')
  const [selectedFonts, setSelectedFonts] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const [variableFont, setVariableFont] = useState(false)

  const findLicenseInfo = () => {
    return licenses.filter((license) => license.title === selectedLicense)
  }

  useEffect(() => {
    setTotalPrice(
      licenses && selectedFonts && findLicenseInfo(selectedLicense)[0].price * selectedFonts.length
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFonts, selectedLicense, licenses])

  return (
    <Component.ParentContainer>
      <Component.SelectionContainer>
        <Global.H2>License this font</Global.H2>
        <SelectionForm
          font={font}
          selectedFonts={selectedFonts}
          setSelectedFonts={setSelectedFonts}
          setSelectedLicense={setSelectedLicense}
          selectedLicense={selectedLicense}
          weightOptions={weightOptions()}
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
          />
        </Global.Margin>
        <CheckoutLinks />
      </Component.PriceContainer>
    </Component.ParentContainer>
  )
}

export default License
