import React from 'react'
import Slider from '@material-ui/core/Slider'
import {Label, P} from '../../styles'

const SliderInput = ({title, handleChange, value, min, max, ariaLabel, marks, step}) => {
  return (
    <>
      <Label>
        {title}
        <P>{value}</P>
        <Slider
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          aria-labelledby={ariaLabel}
          marks={marks}
          step={step}
        />
      </Label>
    </>
  )
}

export default SliderInput
