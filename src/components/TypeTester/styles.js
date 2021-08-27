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

export const Container = styled.div`
  background-color: #1f1e1d;
  color: #f4f4f4;
  padding: 80px;
`
