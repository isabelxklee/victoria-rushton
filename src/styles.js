import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const TextLink = styled.a`
  font-weight: 700;
  color: #f4f4f4;
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

export const P = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 400;
`

export const PSpace = styled(P)`
  margin: 16px 0;
`

export const Description = styled(P)`
  font-size: 18px;
  margin: 24px 0;
  line-height: 1.4;
  width: 75%;
`

export const Wrapper = styled.div`
  margin: 80px;
  padding: 0;
`

export const Content = styled.div`
  padding: ${({$padding}) => $padding};
`

export const Button = styled.button`
  border: none;
  border-radius: 40px;
  background: #1e1e1e;
  color: #f4f4f4;
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: 400;
  font-size: 16px;
  padding: 14px 20px 10px 20px;
`
