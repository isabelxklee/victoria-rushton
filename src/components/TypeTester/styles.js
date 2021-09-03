import styled from 'styled-components'

export const OutputText = styled.p.attrs(({$weight, $size}) => ({
  style: {
    fontWeight: `${$weight}`,
    fontSize: `${$size}px`,
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

export const PanelContainer = styled.div`
  background-color: #1f1e1d;
  color: #f4f4f4;
  padding: 80px;
  width: 300px;
`

export const OutputTextContainer = styled.div`
  padding: 40px;
`

export const InputField = styled.input.attrs(({$weight, $size}) => ({
  style: {
    fontWeight: `${$weight}`,
    fontSize: `${$size}px`,
  },
}))`
  border: none;
  background-color: #f4f4f4;
  color: #1f1e1d;
`
