import React from 'react'

const Slider = ({title, value}) => {
  return (
    <>
      <p>{title}</p>
      <p>{value}</p>
      <progress id={title} max="100" value="70">
        70%
      </progress>
    </>
  )
}

export default Slider
