import styled from 'styled-components'
import {Colors} from '../../styles'

export const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 80px;

  @media (max-width: 900px) {
    display: block;
    margin-top: 0;
  }
`

export const SelectionContainer = styled.div`
  border-right: 2px solid ${Colors.black};
  padding: 0 40px;

  @media (max-width: 900px) {
    padding: 20px 20px 40px 20px;
    border-right: unset;
    border-bottom: 2px solid ${Colors.black};
  }
`
