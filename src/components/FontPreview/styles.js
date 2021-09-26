import styled from 'styled-components'

export const PreviewText = styled.p`
  font-size: ${({$size}) => $size}px;
  font-weight: ${({$weight}) => $weight};
  font-style: ${({$slant}) => ($slant === 'Roman' ? 'normal' : 'italic')};
  font-family: ${({$font}) => $font};
`