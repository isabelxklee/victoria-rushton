import React, {useState} from 'react'
import {useSelector} from 'react-redux'
import * as Component from '../styles/component-styles'
import * as Global from '../styles/global-styles'

const TypeTester = ({marginTop}) => {
  const currentFont = useSelector((state) => state.currentFont.value)
  const [weight, setWeight] = useState(400)
  const [size, setSize] = useState(60)
  const [slant, setSlant] = useState('Roman')
  const [darkMode, setDarkMode] = useState(false)

  const handleColorModeChange = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <Component.TypeTesterContainer $marginTop={marginTop}>
      <Component.PanelContainer>
        <Component.Label>Weight</Component.Label>
        <Component.Select value={weight} onChange={(event) => setWeight(event.target.value)}>
          {currentFont.weights.map((weight) => (
            <option key={weight.title} value={weight.number}>
              {weight.title}
            </option>
          ))}
        </Component.Select>

        {currentFont.slants.length > 1 && (
          <>
            <Component.Label>Slant</Component.Label>
            <Component.Select value={slant} onChange={(event) => setSlant(event.target.value)}>
              {currentFont.slants.map((slant) => (
                <option key={slant} value={slant}>
                  {slant}
                </option>
              ))}
            </Component.Select>
          </>
        )}

        <Component.LabelContainer>
          <Component.Label>Size </Component.Label>
          <Global.P>{size}px</Global.P>
        </Component.LabelContainer>
        <Component.Slider
          type="range"
          min="8"
          max="160"
          onChange={(event) => setSize(event.target.value)}
          className="slider"
        />
        <Component.IconButton onClick={handleColorModeChange} $darkMode={darkMode}>
          {darkMode ? (
            <>
              Light
              <Component.IconSun />
            </>
          ) : (
            <>
              Dark
              <Component.IconMoon />
            </>
          )}
        </Component.IconButton>
      </Component.PanelContainer>
      <Component.TextArea
        name="input"
        placeholder="Type something..."
        $weight={weight ? weight : currentFont.weights[0]}
        $size={size}
        $fontFamily={currentFont.title}
        $slant={slant}
        $darkMode={darkMode ? Global.Colors.black : Global.Colors.white}
        $lightMode={darkMode ? Global.Colors.white : Global.Colors.black}
        spellCheck="false"
      />
    </Component.TypeTesterContainer>
  )
}

export default TypeTester
