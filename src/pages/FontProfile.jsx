import React, {useState} from 'react'
import TypeTester from '../components/TypeTester'
import {OutputText, TypeTesterContainer, OutputTextContainer} from '../components/TypeTester/styles'

const FontProfile = ({font}) => {
  const [weight, setWeight] = useState(400)
  const [size, setSize] = useState(24)

  return (
    <div>
      <h1>{font.name}</h1>
      <TypeTesterContainer>
        <TypeTester weight={weight} setWeight={setWeight} size={size} setSize={setSize} />
        <OutputTextContainer>
          <OutputText $weight={weight.value}>Type something in here...</OutputText>
        </OutputTextContainer>
      </TypeTesterContainer>
    </div>
  )
}

export default FontProfile
