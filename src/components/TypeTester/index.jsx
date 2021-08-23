import React from 'react'
// import Slider from '../Slider'

const TypeTester = () => {
  return (
    <div>
      <div>
        <label>
          weight
          <select>
            {['thin', 'light', 'regular', 'bold'].map((weight) => (
              <option value={weight} key={weight}>
                {weight}
              </option>
            ))}
          </select>
        </label>
        {/* <Slider title="weight" values={['thin', 'light', 'regular', 'bold']} /> */}
      </div>
      <div>
        <p>Type something in here...</p>
      </div>
    </div>
  )
}

export default TypeTester
