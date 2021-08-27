import React from 'react'
import {Container, ReactSelect} from './styles'

const options = [
  {value: 200, label: 'Light'},
  {value: 300, label: 'Book'},
  {value: 400, label: 'Regular'},
  {value: 500, label: 'Medium'},
  {value: 700, label: 'Bold'},
  {value: 900, label: 'Black'},
]

const TypeTester = ({weight, setWeight}) => {
  return (
    <Container>
      <div>
        <label>
          weight
          <ReactSelect
            defaultValue={weight}
            onChange={setWeight}
            options={options}
            placeholder={'Select a font weight'}
          />
        </label>
      </div>
    </Container>
  )
}

export default TypeTester
