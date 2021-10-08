import React from 'react'
import {ReactSelect} from './styles'
import {Label} from './styles'

const Selector = ({
  title,
  options,
  defaultValue,
  handleChange,
  isDisabled,
  displayTitle,
  typeTester,
}) => {
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
          $typeTester={typeTester}
        />
      </Label>
    </>
  )
}

export default Selector
