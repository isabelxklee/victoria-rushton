import React, {useEffect} from 'react'
import {useSelector} from 'react-redux'
import {SelectedItem, TotalPrice, RemoveIcon, Right} from './styles'
import {P, PSpace} from '../../styles/global-styles'
import Checkout from '../Checkout'

const PriceBreakdown = ({
  selectedLicense,
  setSelectedFonts,
  selectedFonts,
  totalPrice,
  variableFont,
  setVariableFont,
}) => {
  const currentFont = useSelector((state) => state.currentFont.value)

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
      {currentFont.title.includes('Cecilie') && selectedLicense.title !== 'Trial' && (
        <SelectedItem $disabled={!variableFont}>
          <P>{currentFont.title} Variable Font</P>
          <Right>
            <P>FREE</P>
          </Right>
        </SelectedItem>
      )}

      {selectedFonts &&
        selectedFonts.map((weightTitle) => (
          <SelectedItem key={weightTitle} $disabled={false}>
            <P>
              {currentFont.title} {weightTitle}
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
      />
    </>
  )
}

export default PriceBreakdown
