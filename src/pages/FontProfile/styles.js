import styled from 'styled-components'
import {P, Colors} from '../../global-styles'

export const TypeTesterBackground = styled.div`
  background: ${Colors.black};
  border: 2px solid ${Colors.black};
  margin-top: 100px;
`

export const HeroContainer = styled.div`
  padding: 120px 0;
  border-bottom: 2px solid ${Colors.black};

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
