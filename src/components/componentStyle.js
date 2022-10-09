import styled from 'styled-components'
import * as Global from '../styles'
import {ReactComponent as Sun} from '../assets/icons/icon-sun.svg'
import {ReactComponent as Moon} from '../assets/icons/icon-moon.svg'

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 4px;
  background: ${Global.Colors.white};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 100px;
`

export const Label = styled.label`
  width: 100%;
`

export const LabelContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TypeTesterContainer = styled.div`
  display: flex;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  margin-top: 100px;

  @media (max-width: 900px) {
    display: block;
    margin-top: 30px;
  }
`

export const PanelContainer = styled.div`
  background: ${Global.Colors.black};
  color: ${Global.Colors.white};
  padding: 80px;
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 40px;

  @media (max-width: 900px) {
    width: calc(100% - 80px);
    padding: 40px;
  }
`

export const TextArea = styled.textarea.attrs(
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
  border-top: 2px solid ${Global.Colors.black};
  border-bottom: 2px solid ${Global.Colors.black};
  box-sizing: border-box;
  line-height: 1;

  ::placeholder {
    color: ${({$lightMode}) => $lightMode};
  }

  @media (max-width: 900px) {
    height: 300px;
  }
`

export const IconButton = styled(Global.Button)`
  border: 2px solid ${({$darkMode}) => ($darkMode ? Global.Colors.black : Global.Colors.white)};
  background: ${({$darkMode}) => ($darkMode ? Global.Colors.white : Global.Colors.black)};
  color: ${({$darkMode}) => ($darkMode ? Global.Colors.black : Global.Colors.white)};
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 10px;
`

export const IconSun = styled(Sun)`
  width: 24px;
  height: 24px;
  fill: ${Global.Colors.black};
`

export const IconMoon = styled(Moon)`
  width: 20px;
  height: 24px;
  fill: ${Global.Colors.white};
`
