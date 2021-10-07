import React from 'react'
import {SelectedFontsContainer} from './styles'

const PriceBreakdown = ({
  font,
  fontPrice,
  licensePrice,
  selectedLicense,
  selectedFonts,
  totalPrice,
  currency,
}) => {
  return (
    <>
      <h3>Cart</h3>
      <SelectedFontsContainer>
        {selectedFonts &&
          selectedFonts.map((weightTitle) => (
            <div key={weightTitle}>
              <p>
                {font.title} {weightTitle}
              </p>
              <p>$100</p>
            </div>
          ))}
      </SelectedFontsContainer>
      {selectedLicense && <p>License: $${licensePrice}</p>}
      <p>
        Subtotal: $ {totalPrice} {currency}
      </p>
    </>
  )
}

export default PriceBreakdown
