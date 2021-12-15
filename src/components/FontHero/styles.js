import styled from 'styled-components'
import {P, Colors} from '../../styles'

export const FontHeroContainer = styled.div`
  position: relative;
  border-bottom: 2px solid ${Colors.black};

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
