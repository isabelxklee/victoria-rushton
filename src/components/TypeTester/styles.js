import styled from 'styled-components'

export const OutputText = styled.p.attrs(({$weight}) => ({
  style: {
    fontWeight: `${$weight}`,
  },
}))`
  display: flex;
  font-family: 'Embury Text';
  font-size: 42px;
`
