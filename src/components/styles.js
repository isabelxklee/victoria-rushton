// import {ReactComponent as Sun} from '../assets/icons/icon-sun.svg'
// import {ReactComponent as Moon} from '../assets/icons/icon-moon.svg'
import styled from 'styled-components'
import {Button, Text, COLORS, FONT_WEIGHTS} from '../styles'

export const Slider = styled.input`
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: 2px;
  background: ${COLORS.WHITE};
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
  font-weight: ${FONT_WEIGHTS.BOOK};
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
  margin-top: ${({$marginTop}) => ($marginTop ? '100px' : '0px')};

  @media (max-width: 900px) {
    display: block;
    margin-top: 30px;
  }
`

export const PanelContainer = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
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
  border-top: 2px solid ${COLORS.BLACK};
  border-bottom: 2px solid ${COLORS.BLACK};
  box-sizing: border-box;
  line-height: 1;

  ::placeholder {
    color: ${({$lightMode}) => $lightMode};
  }

  @media (max-width: 900px) {
    height: 300px;
  }
`

export const IconButton = styled(Button)`
  border: 2px solid ${({$darkMode}) => ($darkMode ? COLORS.BLACK : COLORS.WHITE)};
  background: ${({$darkMode}) => ($darkMode ? COLORS.WHITE : COLORS.BLACK)};
  color: ${({$darkMode}) => ($darkMode ? COLORS.BLACK : COLORS.WHITE)};
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 20px;
`

// export const IconSun = styled(Sun)`
//   width: 24px;
//   height: 24px;
//   fill: ${COLORS.BLACK};
// `

// export const IconMoon = styled(Moon)`
//   width: 20px;
//   height: 24px;
//   fill: ${COLORS.WHITE};
// `

export const ButtonLabel = styled.label`
  border-radius: 40px;
  background: ${COLORS.WHITE};
  color: ${COLORS.BLACK};
  border: 2px solid ${COLORS.BLACK};
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: ${FONT_WEIGHTS.REGULAR};
  font-size: 16px;
  padding: 14px 20px 10px 20px;
  cursor: pointer;
  margin-right: 20px;

  &:active {
    background: ${COLORS.BLACK};
    color: ${COLORS.WHITE};
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
  border-right: 2px solid ${COLORS.BLACK};
  padding: 0 40px;

  @media (max-width: 900px) {
    padding: 20px 20px 40px 20px;
    border-right: unset;
    border-bottom: 2px solid ${COLORS.BLACK};
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
  border-bottom: 2px solid ${COLORS.BLACK};

  &:last-child {
    border-bottom: none;
    margin-bottom: 180px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const PreviewText = styled.p`
  font-size: ${({$size}) => $size}px;
  font-weight: ${({$weight}) => $weight};
  font-style: ${({$slant}) => ($slant === 'Roman' ? 'normal' : 'italic')};
  font-family: ${({$font}) => $font};
  line-height: ${({$lineHeight}) => $lineHeight};
  margin: ${({$margin}) => $margin};
  max-width: 1000px;

  @media (max-width: 900px) {
    font-size: ${({$size}) => $size * 0.7}px;
  }
`

export const HeroContainer = styled.div`
  padding: 120px 0;
  border-bottom: ${({$noBorderBottom}) => ($noBorderBottom ? 'none' : `2px solid ${COLORS.BLACK}`)};

  @media (max-width: 900px) {
    padding: 90px 0;
  }
`

export const SuccessContainer = styled.div`
  padding: 100px 260px;

  @media (max-width: 1100px) {
    padding: 100px 0;
  }
`

export const Description = styled(Text)`
  font-size: 18px;
  margin: 24px 0;
  line-height: 1.4;
  width: 75%;
  font-weight: ${FONT_WEIGHTS.BOOK};

  @media (max-width: 900px) {
    margin: 0 0 20px 0;
    width: 100%;
  }
`
export const ProfilePic = styled.img`
  border-radius: 100%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border: 2px solid ${COLORS.BLACK};
  margin: 40px 80px 20px 0;

  @media (max-width: 900px) {
    margin: 0;
    width: 200px;
    height: 200px;
  }
`

export const IntroContainer = styled(HeroContainer)`
  display: flex;
  border-bottom: none;

  @media (max-width: 900px) {
    display: block;
    padding: 60px 0;
    text-align: center;
  }
`

export const PressContainer = styled.div`
  background: ${COLORS.BLACK};
  color: ${COLORS.WHITE};
  width: calc(100vw - 160px);
  margin-left: calc(50% - 50vw);
  padding: 80px;

  @media (max-width: 900px) {
    padding: 40px;
    width: calc(100vw - 80px);
  }
`

export const PressArticleTitle = styled.a`
  text-transform: uppercase;
  font-weight: ${FONT_WEIGHTS.BOLD};
  font-size: 16px;
  text-decoration: none;
  color: ${COLORS.WHITE};
`

export const PressArticleContainer = styled.div`
  margin: 48px 0;
`

export const Container = styled.div`
  border-left: 2px solid ${COLORS.WHITE};
  padding-left: 50px;

  @media (max-width: 900px) {
    padding-left: 0;
    border-left: none;
  }
`
