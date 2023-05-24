import React, {useMemo} from 'react'
import styled from 'styled-components'
import {Text, RowFlex, COLORS} from '../styles'

const Wrapper = styled.div`
  border-bottom: 2px solid ${COLORS.BLACK};
  padding: 20px 0;

  &:last-child {
    border-bottom: none;
    margin-bottom: 180px;
  }
`

const StyledRowFlex = styled(RowFlex)`
  justify-content: space-between;
`

const FontHero = ({font}) => {
  const calculateStyles = useMemo(() => {
    return font.weights.length
    // * font.slants.length
  })

  console.log(font)

  return (
    <Wrapper>
      <StyledRowFlex>
        <Text>{font.name}</Text>
        <Text>{calculateStyles} available styles</Text>
      </StyledRowFlex>
      <h2>{font.heroCopy.heroCopy}</h2>
      <Text>View this font</Text>
    </Wrapper>
  )
}

export default FontHero
