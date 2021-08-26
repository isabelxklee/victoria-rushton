import React, {useState} from 'react'
import Select from 'react-select'
import {OutputText} from './styles'
// import Slider from '../Slider'

const options = [
  {value: 'thing', label: 'Thin'},
  {value: 'light', label: 'Light'},
  {value: 'regular', label: 'Regular'},
  {value: 'bold', label: 'Bold'},
]

const TypeTester = () => {
  const [weight, setWeight] = useState(null)

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
        <OutputText $weight={weight}>Type something in here...</OutputText>
      </div>
    </div>
  )
}

export default TypeTester
