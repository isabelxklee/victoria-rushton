import styled from 'styled-components'

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
  padding: 0 40px;
`

export const InputField = styled.textarea.attrs(({$weight, $size}) => ({
  style: {
    fontWeight: `${$weight}`,
    fontSize: `${$size}px`,
  },
}))`
  border: none;
  background-color: #f4f4f4;
  color: #1f1e1d;
  font-family: ${({$fontFamily}) => $fontFamily};
  width: 100%;
  height: 100%;

  ::placeholder {
    color: #1f1e1d;
  }
`
