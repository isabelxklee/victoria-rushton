import React, {useState} from 'react'
import TypeTester from '../components/TypeTester'

const FontProfile = ({font}) => {
  const [weight, setWeight] = useState(400)
  const [size, setSize] = useState(24)

  const handleSizeChange = (event, newValue) => {
    setSize(newValue)
  }

  return (
    <div>
      <h1>{font.name}</h1>
      <TypeTester
        font={font}
        weight={weight}
        setWeight={setWeight}
        size={size}
        handleSizeChange={handleSizeChange}
      />
    </div>
  )
}

export default FontProfile
