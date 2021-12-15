import styled from 'styled-components'
import Select from 'react-select'
import {Colors} from '../../styles'

export const ReactSelect = styled(Select)`
  width: 100%;
  color: ${Colors.black};
  margin-top: ${({$typeTester}) => ($typeTester ? '10px' : '0')};

  @media (max-width: 900px) {
    margin-bottom: ${({$typeTester}) => ($typeTester ? '0' : '40px')};
  }
`

export const Label = styled.label`
  width: 100%;
`
