import styled from 'styled-components'

export const OutputText = styled.p.attrs(({$weight}) => ({
  style: {
    fontWeight: `${$weight}`,
  },
}))`
  display: flex;
  font-family: 'Embury Text';
  font-size: 42px;
  flex-grow: 1;
`

export const TypeTesterContainer = styled.div`
  display: flex;
`

export const Container = styled.div`
  background-color: #1f1e1d;
  color: #f4f4f4;
  padding: 80px;
  /* flex-grow: 1; */
  width: 300px;
`

export const OutputTextContainer = styled.div`
  flex-grow: 1;
  padding: 40px;
`
