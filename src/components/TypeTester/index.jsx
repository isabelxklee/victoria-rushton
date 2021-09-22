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
}) => {
  // const colorModes = [
  //   {
  //     value: 0,
  //     label: 'Light',
  //   },
  //   {
  //     value: 100,
  //     label: 'Dark',
  //   },
  // ]

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
      {/* <SliderInput
        title="Color"
        darkMode={darkMode}
        handleChange={handleColorModeChange}
        ariaLabel="discrete-slider-restrict"
        step={null}
        marks={colorModes}
      /> */}
      <button onClick={handleColorModeChange}>Color change</button>
    </PanelContainer>
  )
}

const TypeTester = ({font}) => {
  const [weight, setWeight] = useState(400)
  const [size, setSize] = useState(24)
  const [darkMode, setDarkMode] = useState(false)

  const weightOptions = () => {
    const arr = []
    font.weights.map((weight) => arr.push({value: weight.number, label: weight.title}))

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
      />
      <InputField
        name="input"
        placeholder="Type something..."
        $weight={weight.value}
        $size={size}
        $fontFamily={font.title}
        $darkMode={darkMode ? '#1f1e1d' : '#f4f4f4'}
        $lightMode={darkMode ? '#f4f4f4' : '#1f1e1d'}
      />
    </TypeTesterContainer>
  )
}

export default TypeTester
