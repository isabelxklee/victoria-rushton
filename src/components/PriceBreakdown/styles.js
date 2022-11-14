import styled from 'styled-components'
import {P} from '../../global-styles'
import {ReactComponent as Remove} from '../../assets/icons/icon-remove.svg'

export const PriceContainer = styled.div`
  margin: 40px 0;
  padding: 0 40px;

  @media (max-width: 900px) {
    padding: 0 20px;
  }
`

export const SelectedItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
  align-items: center;
  opacity: ${({$disabled}) => ($disabled ? 0.3 : 1)};
`

export const TotalPrice = styled(P)`
  font-weight: 700;
  margin-top: 16px;
`

export const RemoveIcon = styled(Remove)`
  width: 16px;
  height: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.3;
  }
`

export const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`
