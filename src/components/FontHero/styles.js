import styled from 'styled-components'
import {Colors} from '../../styles'

export const FontHeroContainer = styled.div`
  border-bottom: 2px solid ${Colors.black};

  &:last-child {
    border-bottom: none;
    margin-bottom: 180px;
  }
`

export const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
`
