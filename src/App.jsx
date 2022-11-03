import React, {useEffect} from 'react'
import {Wrapper, AppContainer} from './styles'
import {GlobalStyle} from './globalStyle'
import {Routes, Route} from 'react-router-dom'
import sanityClient from './client.js'
import {fontsQuery} from './queries.js'
import {useDispatch} from 'react-redux'
import {addFonts} from './features/fonts/fontSlice.js'
import About from './pages/About'
import Home from './pages/Home'
import FontProfile from './pages/FontProfile'
import Success from './pages/Success'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    sanityClient
      .fetch(fontsQuery)
      .then((data) => dispatch(addFonts(data)))
      .catch(console.error)
  }, [dispatch])

  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Wrapper>
          <Header />
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
