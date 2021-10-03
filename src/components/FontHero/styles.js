import styled from 'styled-components'
import {P} from '../../styles'

export const FontHeroContainer = styled.div`
  position: relative;
  border-bottom: 2px solid #1e1e1e;

  &:last-child {
    border-bottom: none;
  }
`

export const HeroPreview = styled.h2`
  font-size: 90px;
  font-weight: 400;
  line-height: 0.9;
  margin: ${({$isProfile}) => ($isProfile ? '20px 0' : '120px 0')};
`

export const FontHeroP = styled(P)`
  position: absolute;
  font-weight: 300;
`

export const FontHeroPRight = styled(FontHeroP)`
  right: 0;
`
