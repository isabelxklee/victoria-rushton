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
      <p>Fonts: ${selectedFonts ? fontPrice : 0}</p>
      {selectedFonts &&
        selectedFonts.map((weight) => (
          <p key={weight}>
            {font.title} {weight}
          </p>
        ))}
      <p>
        {selectedLicense
          ? `${selectedLicense.title} license: $${licensePrice}`
          : `License: $${licensePrice}`}
      </p>
      <p>
        Subtotal: $ {totalPrice} {currency}
      </p>
    </>
  )
}

export default PriceBreakdown
