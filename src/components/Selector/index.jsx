import React from 'react'
import {ReactSelect} from './styles'
import {Label} from '../../styles'

const Selector = ({title, options, defaultValue, handleChange, isDisabled, displayTitle}) => {
  return (
    <>
      <Label>
        {displayTitle && title}
        <ReactSelect
          defaultValue={defaultValue}
          onChange={handleChange}
          options={options}
          placeholder={`Select ${title.toLowerCase()}`}
          isDisabled={isDisabled}
        />
      </Label>
    </>
  )
}

export default Selector
