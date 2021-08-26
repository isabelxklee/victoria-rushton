import React, {useState} from 'react'
import TypeTester from '../components/TypeTester'
import {OutputText} from '../components/TypeTester/styles'

const FontProfile = ({font}) => {
  const [weight, setWeight] = useState(400)

  console.log(weight, setWeight)

  return (
    <div>
      <h1>{font.name}</h1>
      <TypeTester weight={weight} setWeight={setWeight} />
      <div>
        <OutputText $weight={weight.value}>Type something in here...</OutputText>
      </div>
    </div>
  )
}

export default FontProfile
