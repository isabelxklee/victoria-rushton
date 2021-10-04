import styled from 'styled-components'

export const PreviewText = styled.p`
  font-size: ${({$size}) => $size}px;
  font-weight: ${({$weight}) => $weight};
  font-style: ${({$slant}) => ($slant === 'Roman' ? 'normal' : 'italic')};
  font-family: ${({$font}) => $font};
  line-height: ${({$lineHeight}) => $lineHeight};
  margin: ${({$margin}) => $margin};

  @media (max-width: 900px) {
    font-size: ${({$size}) => $size * 0.5}px;
  }
`
