import styled from 'styled-components'
import {Button, Colors} from '../../styles'
import {ReactComponent as Sun} from '../../icons/icon-sun.svg'
import {ReactComponent as Moon} from '../../icons/icon-moon.svg'

export const TypeTesterContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  border: 2px solid ${Colors.black};
  margin-top: 100px;
  margin-bottom: 100px;
`

export const PanelContainer = styled.div`
  background: ${Colors.black};
  color: ${Colors.white};
  padding: 80px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 40px;
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
  resize: none;

  ::placeholder {
    color: ${({$lightMode}) => $lightMode};
  }
`

export const IconButton = styled(Button)`
  border: 2px solid ${({$darkMode}) => ($darkMode ? Colors.black : Colors.white)};
  background: ${({$darkMode}) => ($darkMode ? Colors.white : Colors.black)};
  color: ${({$darkMode}) => ($darkMode ? Colors.black : Colors.white)};
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const IconSun = styled(Sun)`
  width: 24px;
  height: 24px;
  fill: #1f1f1f;
`

export const IconMoon = styled(Moon)`
  width: 20px;
  height: 24px;
  fill: ${Colors.white};
`
