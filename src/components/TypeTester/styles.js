import styled from 'styled-components'
import {Button} from '../../styles'
import {ReactComponent as Sun} from '../../icons/icon-sun.svg'
import {ReactComponent as Moon} from '../../icons/icon-moon.svg'

export const TypeTesterContainer = styled.div`
  display: flex;
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

export const IconButton = styled(Button)`
  border: 2px solid #f4f4f4;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 32px;
`

export const IconSun = styled(Sun)`
  width: 24px;
  height: 24px;
  fill: white;
`

export const IconMoon = styled(Moon)`
  width: 20px;
  height: 24px;
  fill: white;
`
