import React, {useState} from 'react'
import Selector from '../Selector'
import SliderInput from '../Slider'
import {
  TypeTesterContainer,
  PanelContainer,
  TextArea,
  IconButton,
  IconSun,
  IconMoon,
} from './styles'
import {Colors} from '../../styles'

const TypeTester = ({font, weightOptions, slantOptions}) => {
  const [weight, setWeight] = useState(null)
  const [size, setSize] = useState(60)
  const [slant, setSlant] = useState({value: 'Roman', label: 'Roman'})
  const [darkMode, setDarkMode] = useState(false)

  const handleSizeChange = (event, newValue) => {
    setSize(newValue)
  }

  const handleColorModeChange = () => {
    setDarkMode((darkMode) => !darkMode)
  }

  return (
    <TypeTesterContainer>
      <PanelContainer>
        <Selector
          displayTitle={true}
          title="Weight"
          options={weightOptions()}
          defaultValue={weight}
          handleChange={setWeight}
          typeTester={true}
        />
        {slantOptions().length > 1 && (
          <Selector
            displayTitle={true}
            title="Slant"
            options={slantOptions()}
            defaultValue={slant}
            handleChange={setSlant}
            isDisabled={slantOptions().length < 2}
            typeTester={true}
          />
        )}

        <SliderInput
          title="Size"
          value={size}
          handleChange={handleSizeChange}
          min={8}
          max={160}
          ariaLabel="continuous-slider"
        />
        <IconButton onClick={handleColorModeChange} $darkMode={darkMode}>
          {darkMode ? (
            <>
              Light
              <IconSun />
            </>
          ) : (
            <>
              Dark
              <IconMoon />
            </>
          )}
        </IconButton>
      </PanelContainer>
      <TextArea
        name="input"
        placeholder="Type something..."
        $weight={weight ? weight.value : weightOptions()[0]}
        $size={size}
        $fontFamily={font.title}
        $slant={slant.value}
        $darkMode={darkMode ? Colors.black : Colors.white}
        $lightMode={darkMode ? Colors.white : Colors.black}
        spellCheck="false"
      />
    </TypeTesterContainer>
  )
}

export default TypeTester
