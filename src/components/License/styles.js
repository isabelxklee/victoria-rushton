import styled from 'styled-components'
import {Colors} from '../../styles'

export const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media (max-width: 900px) {
    display: block;
  }
`

export const SelectionContainer = styled.div`
  border-right: 2px solid ${Colors.black};
  padding: 0 40px;

  @media (max-width: 900px) {
    padding: 40px;
    border-right: unset;
    border-bottom: 2px solid ${Colors.black};
  }
`
