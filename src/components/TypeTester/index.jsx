import React from 'react'
import Selector from '../Selector'
import SliderInput from '../Slider'
import {Container} from './styles'

const weightOptions = [
  {value: 200, label: 'Light'},
  {value: 300, label: 'Book'},
  {value: 400, label: 'Regular'},
  {value: 500, label: 'Medium'},
  {value: 700, label: 'Bold'},
  {value: 900, label: 'Black'},
]

const TypeTester = ({weight, setWeight, size, setSize}) => {
  return (
    <Container>
      <Selector
        title="Weight"
        options={weightOptions}
        defaultValue={weight}
        handleChange={setWeight}
      />
      <SliderInput title="Size" size={size} handleChange={setSize} />
      {/* <div>
        <label>
          Weight
          <ReactSelect
            defaultValue={weight}
            onChange={setWeight}
            options={options}
            placeholder={'Select a font weight'}
          />
        </label>
      </div> */}
    </Container>
  )
}

export default TypeTester
