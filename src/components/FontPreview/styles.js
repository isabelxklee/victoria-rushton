import styled from 'styled-components'

export const PreviewText = styled.p`
  font-size: ${({$size}) => $size}px;
  font-weight: ${({$weight}) => $weight};
  font-style: ${({$slant}) => ($slant === 'Roman' ? 'normal' : 'italic')};
  font-family: ${({$font}) => $font};
  line-height: ${({$lineHeight}) => $lineHeight};
  margin: ${({$margin}) => $margin};
  max-width: 1000px;

  @media (max-width: 900px) {
    font-size: ${({$size}) => $size * 0.7}px;
    
  }
`

export const PreviewTextContainer = styled.div`
  padding: 40px 0;

  @media (max-width: 900px) {
    padding: 30px 0;
  }
`

export const SVG = styled.img`
  width: ${({$width}) => $width}px;
`
