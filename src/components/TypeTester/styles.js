import styled from 'styled-components'

export const TypeTesterContainer = styled.div`
  display: flex;
  margin-top: 100px;
  width: calc(100% + 80px);
  margin-left: -8%;
`

export const PanelContainer = styled.div`
  background-color: #1f1e1d;
  color: #f4f4f4;
  padding: 80px;
  width: 500px;
`

export const InputField = styled.textarea.attrs(
  ({$weight, $size, $darkMode, $lightMode, $slant}) => ({
    style: {
      fontWeight: `${$weight}`,
      fontSize: `${$size}px`,
      backgroundColor: `${$darkMode}`,
      color: `${$lightMode}`,
      fontStyle: `${$slant === 'Roman' ? 'normal' : 'italic'}`,
    },
  })
)`
  border: none;
  font-family: ${({$fontFamily}) => $fontFamily};
  width: 100%;
  padding: 40px;

  ::placeholder {
    color: ${({$lightMode}) => $lightMode};
  }
`
