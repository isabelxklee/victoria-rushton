import React from 'react'
import {Label, P} from '../../styles'
import {LabelContainer, ReactSlider} from './styles'

const SliderInput = ({title, handleChange, value, min, max, ariaLabel, marks, step}) => {
  return (
    <div>
      <LabelContainer>
        <Label>{title} </Label>
        <P>{value}px</P>
      </LabelContainer>
      <ReactSlider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        aria-labelledby={ariaLabel}
        marks={marks}
        step={step}
      />
    </div>
  )
}

export default SliderInput
