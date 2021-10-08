import styled from 'styled-components'

export const ParentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;

  @media (max-width: 900px) {
    display: block;
  }
`
