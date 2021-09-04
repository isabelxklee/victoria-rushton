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

export const InputField = styled.textarea.attrs(({$weight, $size, $darkMode, $lightMode}) => ({
  style: {
    fontWeight: `${$weight}`,
    fontSize: `${$size}px`,
    backgroundColor: `${$darkMode}`,
    color: `${$lightMode}`,
  },
}))`
  border: none;
  font-family: ${({$fontFamily}) => $fontFamily};
  width: 100%;
  padding: 40px;

  ::placeholder {
    color: ${({$lightMode}) => $lightMode};
  }
`
