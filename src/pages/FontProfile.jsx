import React from 'react'
import TypeTester from '../components/TypeTester'

const FontProfile = ({font}) => {
  return (
    <>
      <h1>{font.name}</h1>
      <TypeTester font={font} />
    </>
  )
}

export default FontProfile
