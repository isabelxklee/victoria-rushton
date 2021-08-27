import React from 'react'
import Slider from '@material-ui/core/Slider'

const SliderInput = ({title, handleSizeChange, size}) => {
  return (
    <>
      <label>
        {title}
        <p>{size}</p>
        <Slider value={size} onChange={handleSizeChange} aria-labelledby="continuous-slider" />
      </label>
    </>
  )
}

export default SliderInput
