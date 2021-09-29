import React, {useState} from 'react'

const PriceBreakdown = ({font, selectedLicense, selectedFonts}) => {
  const [total, setTotal] = useState(0)

  console.log(selectedLicense, selectedFonts)

  // if (selectedFonts && font.weights.length === selectedFonts.length) {
  //   setTotal((total) => total * 0.4)
  // }

  return (
    <>
      <h3>Price breakdown</h3>
      {selectedLicense && <p>{selectedLicense.title} license</p>}
      <p>Subtotal: {total}</p>
    </>
  )
}

export default PriceBreakdown
