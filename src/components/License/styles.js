import styled from 'styled-components'

export const FlexContainer = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 900px) {
    flex-direction: column;
  }
`

export const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 900px) {
    display: block;
  }
`

export const Options = styled(FlexContainer)`
  flex-direction: column;
  width: 100%;
`
