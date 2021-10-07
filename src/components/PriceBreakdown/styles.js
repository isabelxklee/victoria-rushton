import styled from 'styled-components'

export const PriceContainer = styled.div`
  border-left: 2px solid #1e1e1e;
  margin: 40px 0;
  padding: 0 40px;

  @media (max-width: 900px) {
    border-left: unset;
    border-top: 2px solid #1e1e1e;
    padding: 40px 0;
  }
`

export const SelectedFontsContainer = styled.div`
  background: black;
  color: white;
`
