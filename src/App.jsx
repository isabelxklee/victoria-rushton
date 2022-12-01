import React, {useEffect} from 'react'
import {Wrapper, AppContainer} from './styles/global-styles'
import {GlobalStyle} from './styles/font-styles'
import {Routes, Route, useLocation} from 'react-router-dom'
import sanityClient from './client.js'
import {fontsQuery, licensesQuery, previewTextQuery} from './queries.js'
import {useDispatch} from 'react-redux'
import {addFonts} from './slices/font-slice.js'
import {addLicenses} from './slices/license-slice.js'
import {addPreviewTexts} from './slices/preview-text-slice.js'
import About from './pages/About'
import Home from './pages/Home'
import FontProfile from './pages/FontProfile'
import Success from './pages/Success'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const dispatch = useDispatch()
  const {pathname} = useLocation()

  useEffect(() => {
    sanityClient
      .fetch(fontsQuery)
      .then((data) => dispatch(addFonts(data)))
      .catch(console.error)

    sanityClient
      .fetch(licensesQuery)
      .then((data) => dispatch(addLicenses(data)))
      .catch(console.error)

    sanityClient
      .fetch(previewTextQuery)
      .then((data) => dispatch(addPreviewTexts(data)))
      .catch(console.error)

    window.scrollTo(0, 0)
  }, [dispatch, pathname])

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
