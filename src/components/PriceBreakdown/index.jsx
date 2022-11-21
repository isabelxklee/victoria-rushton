import React, {useEffect} from 'react'
import {SelectedItem, TotalPrice, RemoveIcon, Right} from './styles'
import {P, PSpace} from '../../styles/global-styles'
import Checkout from '../Checkout'

const PriceBreakdown = ({
  font,
  selectedLicense,
  setSelectedFonts,
  selectedFonts,
  totalPrice,
  variableFont,
  setVariableFont,
}) => {
  useEffect(() => {
    if (selectedFonts.length > 4) {
      setVariableFont(true)
    } else {
      setVariableFont(false)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedFonts])

  const handleRemove = (deletedFont) => {
    setSelectedFonts((selectedFonts) => selectedFonts.filter((font) => font !== deletedFont))
  }

  return (
    <>
      <PSpace inputMargin="8px 0">{selectedLicense.title} License</PSpace>
      {font.title.includes('Cecilie') && selectedLicense.title !== 'Trial' && (
        <SelectedItem $disabled={!variableFont}>
          <P>{font.title} Variable Font</P>
          <Right>
            <P>FREE</P>
          </Right>
        </SelectedItem>
      )}

      {selectedFonts &&
        selectedFonts.map((weightTitle) => (
          <SelectedItem key={weightTitle} $disabled={false}>
            <P>
              {font.title} {weightTitle}
            </P>
            <Right>
              <P>${selectedLicense.price}</P>
              <RemoveIcon onClick={() => handleRemove(weightTitle)} />
            </Right>
          </SelectedItem>
        ))}

      <SelectedItem $disabled={false}>
        <TotalPrice>Subtotal</TotalPrice>
        <TotalPrice>${totalPrice ? totalPrice : 0}</TotalPrice>
      </SelectedItem>

      <Checkout
        selectedLicense={selectedLicense}
        selectedFonts={selectedFonts}
        setSelectedFonts={setSelectedFonts}
        font={font}
      />
    </>
  )
}

export default PriceBreakdown
