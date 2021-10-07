import React from 'react'

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
      <p>Fonts: ${fontPrice}</p>
      {selectedFonts &&
        selectedFonts.map((weight) => (
          <p key={weight}>
            {font.title} {weight}
          </p>
        ))}
      {totalPrice > 0 && (
        <p>
          $ {selectedLicense ? totalPrice - selectedLicense.price : totalPrice} {currency}
        </p>
      )}

      <p>License: ${licensePrice}</p>
      {selectedLicense && (
        <p>
          {selectedLicense.title} license: $ {selectedLicense.price}
        </p>
      )}
      <p>
        Subtotal: $ {totalPrice} {currency}
      </p>
    </>
  )
}

export default PriceBreakdown
