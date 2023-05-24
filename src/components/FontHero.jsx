import React, {useMemo} from 'react'
import {Text} from '../styles'

const FontHero = ({font}) => {
  const calculateStyles = useMemo(() => {
    return font.weights.length
    // * font.slants.length
  })

  console.log(font)

  return (
    <div>
      <Text>{font.name}</Text>
      <Text>{calculateStyles} available styles</Text>
      <h2>{font.heroCopy.heroCopy}</h2>
      <Text>View this font</Text>
    </div>
  )
}

export default FontHero
