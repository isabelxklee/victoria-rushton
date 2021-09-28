import React from 'react'
import {ReactSelect} from './styles'
import {Label} from '../../styles'

const Selector = ({title, options, defaultValue, handleChange, isDisabled}) => {
  return (
    <>
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
    </>
  )
}

export default Selector
