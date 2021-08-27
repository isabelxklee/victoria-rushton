import React from 'react'
import Slider from '@material-ui/core/Slider'

const SliderInput = ({title, handleChange, size}) => {
  return (
    <>
      <label>
        {title}
        {/* <Slider
          defaultValue={size}
          // getAriaValueText={`${size}px`}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={8}
          marks
          min={8}
          max={200}
        /> */}
        <p>{size}</p>
        <Slider
          value={size}
          onChange={(newValue) => handleChange(newValue)}
          aria-labelledby="continuous-slider"
        />
      </label>
    </>
  )
}

export default SliderInput
