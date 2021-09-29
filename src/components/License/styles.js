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
`

export const Options = styled(FlexContainer)`
  flex-direction: column;
`
