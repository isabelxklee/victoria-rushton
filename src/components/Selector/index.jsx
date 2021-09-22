import React from 'react'
import {ReactSelect} from './styles'

const Selector = ({title, options, defaultValue, handleChange, isDisabled}) => {
  return (
    <>
      <label>
        {title}
        <ReactSelect
          defaultValue={defaultValue}
          onChange={handleChange}
          options={options}
          placeholder={`Select a ${title}`}
          isDisabled={isDisabled}
        />
      </label>
    </>
  )
}

export default Selector
