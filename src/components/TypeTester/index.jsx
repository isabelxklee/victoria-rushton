import React, {useState} from 'react'
import Selector from '../Selector'
import SliderInput from '../Slider'
import {TypeTesterContainer, PanelContainer, InputField} from './styles'

const Panel = ({
  weight,
  setWeight,
  weightOptions,
  size,
  handleSizeChange,
  handleColorModeChange,
  slant,
  setSlant,
  slantOptions,
}) => {
  return (
    <PanelContainer>
      <Selector
        title="Weight"
        options={weightOptions}
        defaultValue={weight}
        handleChange={setWeight}
      />
      <Selector
        title="Slant"
        options={slantOptions}
        defaultValue={slant}
        handleChange={setSlant}
        isDisabled={slantOptions.length < 2}
      />
      <SliderInput
        title="Size"
        value={size}
        handleChange={handleSizeChange}
        min={8}
        max={200}
        ariaLabel="continuous-slider"
      />
      <button onClick={handleColorModeChange}>Color change</button>
    </PanelContainer>
  )
}

const TypeTester = ({font}) => {
  const [weight, setWeight] = useState({value: 400, label: 'Regular'})
  const [size, setSize] = useState(48)
  const [slant, setSlant] = useState({value: 'Roman', label: 'Roman'})
  const [darkMode, setDarkMode] = useState(false)

  const weightOptions = () => {
    const arr = []
    font.weights.map((weight) => arr.push({value: weight.number, label: weight.title}))

    return arr
  }

  const slantOptions = () => {
    const arr = []
    font.slants.map((slant) => arr.push({value: slant, label: slant}))

    return arr
  }

  const handleSizeChange = (event, newValue) => {
    setSize(newValue)
  }

  const handleColorModeChange = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <TypeTesterContainer>
      <Panel
        font={font}
        weight={weight}
        setWeight={setWeight}
        weightOptions={weightOptions()}
        size={size}
        handleSizeChange={handleSizeChange}
        darkMode={darkMode}
        handleColorModeChange={handleColorModeChange}
        slant={slant}
        setSlant={setSlant}
        slantOptions={slantOptions()}
      />
      <InputField
        name="input"
        placeholder="Type something..."
        $weight={weight.value}
        $size={size}
        $fontFamily={font.title}
        $slant={slant.value}
        $darkMode={darkMode ? '#1f1e1d' : '#f4f4f4'}
        $lightMode={darkMode ? '#f4f4f4' : '#1f1e1d'}
      />
    </TypeTesterContainer>
  )
}

export default TypeTester
