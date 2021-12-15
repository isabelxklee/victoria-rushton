import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Colors = {
  white: '#f4f4f4',
  black: '#1E1E1E',
}

export const TextLink = styled.a`
  font-weight: ${(props) => props.inputWeight || 700};
  color: ${({$light}) => ($light ? Colors.white : Colors.black)};
  text-decoration: none;
`

export const InternalLink = styled(Link)`
  font-weight: 700;
  color: ${Colors.black};
  text-decoration: none;
  margin-right: 20px;
`

export const Wrapper = styled.div`
  margin: 80px;
  padding: 0;

  @media (max-width: 900px) {
    margin: 20px;
  }
`

export const Padding = styled.div`
  padding: ${({$padding}) => $padding};
`

export const Margin = styled.div`
  margin: ${({$margin}) => $margin};
`

export const Button = styled.button`
  border: none;
  border-radius: 40px;
  background: ${Colors.black};
  color: ${Colors.white};
  border: 2px solid ${Colors.white};
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: 300;
  font-size: 16px;
  padding: 10px 20px 10px 20px;
  pointer-events: ${({$disabled}) => ($disabled ? 'none' : 'auto')};
  cursor: ${({$disabled}) => ($disabled ? 'default' : 'pointer')};
  opacity: ${({$disabled}) => ($disabled ? 0.3 : 1)};
`

export const SecondaryButton = styled(Button)`
  background: ${Colors.white};
  color: ${Colors.black};
  border: 2px solid ${Colors.black};
`

export const Label = styled.label`
  font-weight: 300;
  font-size: 18px;
`

export const H1 = styled.h1`
  font-size: 100px;
  font-weight: 400;
  line-height: 0.9;
  margin: ${({$margin}) => $margin};
  font-family: ${({$font}) => $font};

  @media (max-width: 900px) {
    font-size: 60px;
  }
`

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
`

export const H3 = styled.h3`
  font-size: 18px;
  margin: 0 0 16px 0;
`

export const P = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 300;
  line-height: 1.4;
  text-align: left;

  @media (max-width: 900px) {
    font-size: 16px;
  }
`

export const PSpace = styled(P)`
  margin: ${(props) => props.inputMargin || '16px 0'};
`

export const SmallText = styled(P)`
  font-size: 14px;
  margin-bottom: 8px;
`
