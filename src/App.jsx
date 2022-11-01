import React, {useState, useEffect} from 'react'
import {Wrapper, AppContainer} from './styles'
import {GlobalStyle} from './globalStyle'
import {Routes, Route} from 'react-router-dom'
import sanityClient from './client.js'
import {fontsQuery} from './queries.js'
import About from './pages/About'
import Home from './pages/Home'
import FontProfile from './pages/FontProfile'
import Success from './pages/Success'
import Footer from './components/Footer'
import Header from './components/Header'
// import Counter from './features/counter/Counter'

const App = () => {
  const [fonts, setFonts] = useState(null)

  useEffect(() => {
    sanityClient
      .fetch(fontsQuery)
      .then((data) => setFonts(data))
      .catch(console.error)
  }, [])

  console.log(fonts)

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Wrapper>
          <Header />
          {/* <Counter /> */}
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/success" element={<Success />} />
            <Route path="/" element={<Home />} />
            <Route path="/:slug" element={<FontProfile />} />
          </Routes>
        </Wrapper>
        <Footer />
      </AppContainer>
    </>
  )
}

export default App
