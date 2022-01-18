import styled from 'styled-components'
import {Field} from 'formik'

export const Label = styled.label`
  margin: 16px 0 2px 0;
`

export const FieldContainer = styled.div`
  margin: 16px 0;
  display: grid;
`

export const Error = styled.div`
  color: red;
  font-size: 16px;
  font-weight: 300;
`

export const InputField = styled(Field)`
  font-family: 'Cecilie Sans', sans-serif;
  font-size: 16px;
  padding: 4px 8px;
  border-radius: 4px;
  border: 1px solid #ccc !important;
  margin-bottom: 4px;
  font-weight: 300;
`
