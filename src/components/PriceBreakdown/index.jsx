import React from 'react'

const PriceBreakdown = ({font, selectedLicense, selectedFonts, totalPrice, currency}) => {
  return (
    <>
      <h3>Price breakdown</h3>
      {selectedFonts &&
        selectedFonts.map((weight) => (
          <p key={weight.weight}>
            {font.title} {weight.weight}
          </p>
        ))}
      {totalPrice > 0 && (
        <p>
          $ {selectedLicense ? totalPrice - selectedLicense.price : totalPrice} {currency}
        </p>
      )}

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
