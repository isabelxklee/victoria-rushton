import React from 'react'
import {ReactSelect} from './styles'
import {Label, Margin} from '../../styles'

const Selector = ({title, options, defaultValue, handleChange, isDisabled}) => {
  return (
    <Margin $margin="0 0 24px 0">
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
    </Margin>
  )
}

export default Selector
