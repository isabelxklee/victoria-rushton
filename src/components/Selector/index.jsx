import React from 'react'
import {ReactSelect} from './styles'

const Selector = ({title, options, defaultValue, handleChange}) => {
  return (
    <>
      <label>
        {title}
        <ReactSelect
          defaultValue={defaultValue}
          onChange={handleChange}
          options={options}
          placeholder={`Select a ${title}`}
        />
      </label>
    </>
  )
}

export default Selector
