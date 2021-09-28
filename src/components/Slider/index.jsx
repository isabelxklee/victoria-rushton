import React from 'react'
import Slider from '@material-ui/core/Slider'
import {Label, P} from '../../styles'
import {LabelContainer} from './styles'

const SliderInput = ({title, handleChange, value, min, max, ariaLabel, marks, step}) => {
  return (
    <>
      <LabelContainer>
        <Label>{title} </Label>
        <P>{value}px</P>
      </LabelContainer>
      <Slider
        value={value}
        onChange={handleChange}
        min={min}
        max={max}
        aria-labelledby={ariaLabel}
        marks={marks}
        step={step}
      />
    </>
  )
}

export default SliderInput
