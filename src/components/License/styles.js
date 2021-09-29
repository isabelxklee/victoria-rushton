import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  gap: 16px;
`

export const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export const LicenseContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding-right: 60px;
`

export const Options = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
`

export const SelectionContainer = styled.div`
  padding-right: 60px;
  margin-bottom: 60px;
`
