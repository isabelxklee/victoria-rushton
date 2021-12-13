import styled from 'styled-components'
import {P} from '../../styles'

export const FontHeroContainer = styled.div`
  position: relative;
  border-bottom: 1px solid #1e1e1e;

  &:last-child {
    border-bottom: none;
  }
`

export const FontHeroP = styled(P)`
  position: absolute;
  font-weight: 300;
`

export const FontHeroPRight = styled(FontHeroP)`
  right: 0;
`
