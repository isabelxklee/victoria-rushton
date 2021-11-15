import styled from 'styled-components'
import {P} from '../../styles'

export const PriceContainer = styled.div`
  border-left: 2px solid #1e1e1e;
  margin: 40px 0;
  padding: 0 40px;

  @media (max-width: 900px) {
    border-left: unset;
    border-top: 2px solid #1e1e1e;
    padding: 40px 0;
  }
`

export const SelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px 0;
  border-bottom: 1px solid rgb(30, 30, 30, 0.2);

  &:last-child {
    border-bottom: none;
  }
`

export const TotalPrice = styled(P)`
  font-weight: 700;
`
