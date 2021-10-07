import styled from 'styled-components'
import {Field} from 'formik'
import {Colors} from '../../styles'

export const Checkbox = styled(Field)``

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
