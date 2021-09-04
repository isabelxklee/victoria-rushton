import React from 'react'
import Slider from '@material-ui/core/Slider'

const SliderInput = ({title, handleChange, value, min, max, ariaLabel, marks, step}) => {
  return (
    <>
      <label>
        {title}
        <p>{value}</p>
        <Slider
          value={value}
          onChange={handleChange}
          min={min}
          max={max}
          aria-labelledby={ariaLabel}
          marks={marks}
          step={step}
        />
      </label>
    </>
  )
}

export default SliderInput
