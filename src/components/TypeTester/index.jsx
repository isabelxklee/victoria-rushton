import React from 'react'
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

const Panel = ({weight, setWeight, size, handleSizeChange}) => {
  return (
    <PanelContainer>
      <Selector
        title="Weight"
        options={weightOptions}
        defaultValue={weight}
        handleChange={setWeight}
      />
      <SliderInput title="Size" size={size} handleSizeChange={handleSizeChange} />
    </PanelContainer>
  )
}

const TypeTester = ({font, weight, setWeight, size, handleSizeChange}) => {
  return (
    <TypeTesterContainer>
      <Panel
        weight={weight}
        setWeight={setWeight}
        size={size}
        handleSizeChange={handleSizeChange}
      />
      <OutputTextContainer>
        <InputField
          type="textarea"
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
