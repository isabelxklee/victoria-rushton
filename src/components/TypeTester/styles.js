import styled from 'styled-components'

export const OutputText = styled.p.attrs(({$weight}) => ({
  style: {
    fontWeight: `${$weight}`,
  },
}))`
  display: flex;
`
