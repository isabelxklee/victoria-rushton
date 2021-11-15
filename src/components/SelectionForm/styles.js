import styled from 'styled-components'
import {Colors} from '../../styles'

export const ButtonLabel = styled.label`
  border-radius: 40px;
  background: ${Colors.white};
  color: ${Colors.black};
  border: 2px solid ${Colors.black};
  font-family: 'Cecilie Sans', 'sans-serif';
  font-weight: 400;
  font-size: 16px;
  padding: 14px 20px 10px 20px;
  cursor: pointer;
  margin-right: 20px;

  &:active {
    background: ${Colors.black};
    color: ${Colors.white};
  }
`

export const LicenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;

  @media (max-width: 900px) {
    display: block;
    padding: 0;
  }
`

export const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 4px;
  width: 65%;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const Options = styled(ButtonGroup)`
  flex-direction: column;
  width: 100%;
`
