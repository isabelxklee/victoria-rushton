import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Colors = {
  white: '#f4f4f4',
  black: '#1E1E1E',
}

export const TextLink = styled.a`
  font-weight: ${(props) => props.inputWeight || 700};
  color: ${Colors.white};
  text-decoration: none;
`

export const InternalLink = styled(Link)`
  font-weight: 700;
  color: #1e1e1e;
  text-decoration: none;
  margin-right: 20px;
`

export const Divider = styled.div`
  width: 100%;
  border: 1px solid #1e1e1e;
`

export const VerticalDivider = styled(Divider)`
  transform: rotate(90deg);
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

export const Description = styled(P)`
  font-size: 18px;
  margin: 24px 0;
  line-height: 1.4;
  width: 75%;
  font-weight: 300;
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
  background: #1e1e1e;
  color: ${Colors.white};
  border: 1px solid ${Colors.white};
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: 300;
  font-size: 16px;
  padding: 14px 20px 10px 20px;
  cursor: pointer;
`

export const SecondaryButton = styled(Button)`
  background: ${Colors.white};
  color: #1e1e1e;
  border: 2px solid #1e1e1e;
`

export const Label = styled.label`
  font-weight: 300;
  font-size: 18px;
`

export const H2 = styled.h2`
  font-size: 32px;
  font-weight: 700;
`

export const H1 = styled.h1`
  font-size: 90px;
  font-weight: 400;
  line-height: 0.9;
  margin: ${({$margin}) => $margin};
  font-family: ${({$font}) => $font};

  @media (max-width: 900px) {
    font-size: 44px;
  }
`
