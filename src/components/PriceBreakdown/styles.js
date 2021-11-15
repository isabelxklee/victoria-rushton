import styled from 'styled-components'
import {P} from '../../styles'
import {ReactComponent as Remove} from '../../icons/icon-remove.svg'

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
  padding: 8px 0;
  border-bottom: 1px solid rgb(30, 30, 30, 0.2);
  align-items: center;

  &:last-child {
    border-bottom: none;
  }
`

export const TotalPrice = styled(P)`
  font-weight: 700;
  margin-top: 16px;
`

export const LinksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 32px;
`

export const RemoveIcon = styled(Remove)`
  width: 18px;
  height: 18px;
  cursor: pointer;
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
