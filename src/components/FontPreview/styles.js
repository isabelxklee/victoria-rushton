import styled from 'styled-components'

export const PreviewTextContainer = styled.div`
  padding: 40px 0;

  @media (max-width: 900px) {
    padding: 30px 0;
  }
`

export const SVG = styled.img`
  width: ${({$width}) => $width}px;
`
