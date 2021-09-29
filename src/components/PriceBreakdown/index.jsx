import React from 'react'

const PriceBreakdown = ({font, selectedLicense, selectedFonts, totalPrice}) => {
  return (
    <>
      <h3>Price breakdown</h3>
      {selectedFonts &&
        selectedFonts.map((weight) => (
          <p key={weight.weight}>
            {font.title} {weight.weight}
          </p>
        ))}
      <p>$ {selectedLicense ? totalPrice - selectedLicense.price : totalPrice}</p>
      {selectedLicense && (
        <p>
          {selectedLicense.title} license: $ {selectedLicense.price}
        </p>
      )}
      <p>Subtotal: $ {totalPrice}</p>
    </>
  )
}

export default PriceBreakdown
