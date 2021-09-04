import React, {useState} from 'react'
import Selector from '../Selector'
import SliderInput from '../Slider'
import {TypeTesterContainer, OutputTextContainer, PanelContainer, InputField} from './styles'

const weightOptions = [
  {value: 200, label: 'Light'},
  {value: 300, label: 'Book'},
  {value: 400, label: 'Regular'},
  {value: 500, label: 'Medium'},
  {value: 700, label: 'Bold'},
  {value: 900, label: 'Black'},
]

const Panel = ({weight, setWeight, size, handleSizeChange, darkMode, handleColorModeChange}) => {
  const colorModes = [
    {
      value: 0,
      label: 'Light mode',
    },
    {
      value: 100,
      label: 'Dark mode',
    },
  ]

  return (
    <PanelContainer>
      <Selector
        title="Weight"
        options={weightOptions}
        defaultValue={weight}
        handleChange={setWeight}
      />
      <SliderInput
        title="Size"
        value={size}
        handleChange={handleSizeChange}
        min={8}
        max={200}
        ariaLabel="continuous-slider"
      />
      <SliderInput
        title="Color"
        darkMode={darkMode}
        handleChange={handleColorModeChange}
        ariaLabel="discrete-slider-restrict"
        step={null}
        marks={colorModes}
      />
    </PanelContainer>
  )
}

const TypeTester = ({font}) => {
  const [weight, setWeight] = useState(400)
  const [size, setSize] = useState(24)
  const [darkMode, setDarkMode] = useState(false)

  const handleSizeChange = (event, newValue) => {
    setSize(newValue)
  }

  const handleColorModeChange = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <TypeTesterContainer>
      <Panel
        weight={weight}
        setWeight={setWeight}
        size={size}
        handleSizeChange={handleSizeChange}
        darkMode={darkMode}
        handleColorModeChange={handleColorModeChange}
      />
      <OutputTextContainer>
        <InputField
          name="input"
          placeholder="Type something..."
          $weight={weight.value}
          $size={size}
          $fontFamily={font.name}
        />
      </OutputTextContainer>
    </TypeTesterContainer>
  )
}

export default TypeTester
