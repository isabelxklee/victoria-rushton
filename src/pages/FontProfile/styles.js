import styled from 'styled-components'
import {P} from '../../styles'

export const TypeTesterBackground = styled.div`
  background: #1f1f1f;
  border: 2px solid #1f1f1f;
  margin-top: 100px;
`

export const HeroContainer = styled.div`
  padding: 120px 0;
  border-bottom: 2px solid #1e1e1e;

  @media (max-width: 900px) {
    padding: 90px 0;
  }
`

export const Description = styled(P)`
  font-size: 18px;
  margin: 24px 0;
  line-height: 1.4;
  width: 75%;
  font-weight: 300;

  @media (max-width: 900px) {
    margin: 0 0 20px 0;
    width: 100%;
  }
`
