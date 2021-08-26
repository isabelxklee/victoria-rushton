import React, {useState} from 'react'
import Select from 'react-select'
import {OutputText} from './styles'
// import Slider from '../Slider'

const options = [
  {value: 200, label: 'Light'},
  {value: 300, label: 'Book'},
  {value: 400, label: 'Regular'},
  {value: 500, label: 'Medium'},
  {value: 700, label: 'Bold'},
  {value: 900, label: 'Black'},
]

const TypeTester = () => {
  const [weight, setWeight] = useState(400)

  console.log(weight)

  return (
    <div>
      <div>
        <label>
          weight
          <Select
            defaultValue={weight}
            onChange={setWeight}
            options={options}
            placeholder={'Select a font weight'}
          />
        </label>
        {/* <Slider title="weight" values={['thin', 'light', 'regular', 'bold']} /> */}
      </div>
      <div>
        <OutputText $weight={weight.value}>Type something in here...</OutputText>
      </div>
    </div>
  )
}

export default TypeTester
