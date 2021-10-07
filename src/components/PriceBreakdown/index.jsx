import React from 'react'
import {SelectedFontsContainer} from './styles'

const PriceBreakdown = ({
  font,
  fontPrice,
  totalPrice,
  licensePrice,
  selectedLicense,
  selectedFonts,
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
      {selectedLicense && (
        <p>
          {selectedLicense.title} license: ${licensePrice}
        </p>
      )}
      <p>
        Subtotal: ${licensePrice ? licensePrice + fontPrice : fontPrice} {currency}
      </p>
    </>
  )
}

export default PriceBreakdown
