import React from 'react'
import Slider from '@material-ui/core/Slider'

const SliderInput = ({title, handleChange, size}) => {
  return (
    <>
      <label>
        {title}
        <Slider value={size} onChange={handleChange} aria-labelledby="continuous-slider" />
      </label>
    </>
  )
}

export default SliderInput
