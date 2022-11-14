import styled from 'styled-components'
import * as Global from './global-styles'
import {ReactComponent as Sun} from '../assets/icons/icon-sun.svg'
import {ReactComponent as Moon} from '../assets/icons/icon-moon.svg'

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: ${Global.Colors.white};
  outline: none;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
  border-radius: 100px;
`

export const Select = styled.select`
  height: fit-content;
  width: ${({$width}) => ($width === 'fixed' ? '170px' : '100%')};
  padding: 10px;
  font-family: 'Cecilie Sans', 'sans-serif';
  font-size: 16px;
  font-weight: 300;
  border-radius: 4px;
  appearance: none;
  background-image: linear-gradient(45deg, transparent 50%, gray 50%),
    linear-gradient(135deg, gray 50%, transparent 50%), linear-gradient(to right, #ccc, #ccc);
  background-position: calc(100% - 20px), calc(100% - 15px), calc(100% - 2.5em);
  background-position-y: calc(50%);
  background-size: 5px 5px, 5px 5px, 1px 1.5em;
  background-repeat: no-repeat;
  cursor: pointer;

  @media (max-width: 900px) {
    width: 100%;
  }
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
  gap: 20px;

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
  margin-top: 20px;
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

export const ButtonLabel = styled.label`
  border-radius: 40px;
  background: ${Global.Colors.white};
  color: ${Global.Colors.black};
  border: 2px solid ${Global.Colors.black};
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: 400;
  font-size: 16px;
  padding: 14px 20px 10px 20px;
  cursor: pointer;
  margin-right: 20px;

  &:active {
    background: ${Global.Colors.black};
    color: ${Global.Colors.white};
  }
`

export const LicenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 900px) {
    display: block;
    padding: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 85%;
  gap: 8px;

  @media (max-width: 950px) {
    width: 100%;
  }
`

export const Options = styled(ButtonGroup)`
  flex-direction: column;
`

export const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 80px 0 140px 0;

  @media (max-width: 900px) {
    display: block;
  }
`

export const SelectionContainer = styled.div`
  border-right: 2px solid ${Global.Colors.black};
  padding: 0 40px;

  @media (max-width: 900px) {
    padding: 20px 20px 40px 20px;
    border-right: unset;
    border-bottom: 2px solid ${Global.Colors.black};
  }
`

export const PriceContainer = styled.div`
  margin: 40px 0;
  padding: 0 40px;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`

export const FontHeroContainer = styled.div`
  border-bottom: 2px solid ${Global.Colors.black};

  &:last-child {
    border-bottom: none;
    margin-bottom: 180px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
