import styled from 'styled-components'
import Select from 'react-select'
import {Colors} from '../../styles'

export const ReactSelect = styled(Select)`
  width: 100%;
  color: ${Colors.black};
  margin-top: ${({$typeTester}) => ($typeTester ? '10px' : '0')};
`

export const Label = styled.label`
  width: 100%;
`
