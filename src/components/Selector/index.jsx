import React from 'react'
import {ReactSelect} from './styles'
import {Label, Padding} from '../../styles'

const Selector = ({title, options, defaultValue, handleChange, isDisabled}) => {
  return (
    <Padding $padding="10px 0">
      <Label>
        {title}
        <ReactSelect
          defaultValue={defaultValue}
          onChange={handleChange}
          options={options}
          placeholder={`Select a ${title}`}
          isDisabled={isDisabled}
        />
      </Label>
    </Padding>
  )
}

export default Selector
