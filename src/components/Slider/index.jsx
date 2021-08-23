import React from 'react'

const Slider = ({title, values}) => {
  return (
    <>
      <div>
        <p>{title}</p>
        <p>{values[0]}</p>
      </div>
      <progress id={title} max="100" value="70">
        70%
      </progress>
    </>
  )
}

export default Slider
