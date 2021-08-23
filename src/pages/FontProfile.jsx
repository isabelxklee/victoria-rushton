import React from 'react'
import TypeTester from '../components/TypeTester'

const FontProfile = ({font}) => {
  return (
    <div>
      <h1>{font.name}</h1>
      <TypeTester />
    </div>
  )
}

export default FontProfile
