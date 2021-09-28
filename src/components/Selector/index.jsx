import React from 'react'
import {ReactSelect} from './styles'
import {Label, Margin} from '../../styles'

const Selector = ({title, options, defaultValue, handleChange, isDisabled}) => {
  // const customStyles = {
  //   control: (styles) => ({
  //     ...styles,
  //     backgroundColor: 'black',
  //     color: 'white',
  //   }),
  //   option: (base, state) => ({
  //     ...base,
  //     backgroundColor: state.isSelected ? 'blue' : 'red',
  //   }),
  // }

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
          // style={customStyles}
        />
      </Label>
    </Margin>
  )
}

export default Selector
