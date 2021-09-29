import React from 'react'
import {Wrapper} from './styles'
import {GlobalStyle} from './globalStyle'
import {Switch, Route} from 'react-router-dom'
// import About from './pages/Home'
// import Type from './pages/Type'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import FontProfile from './pages/FontProfile'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Switch>
          {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/type">
          <Type />
        </Route> */}
          <Route component={Home} exact path="/" />
          <Route component={FontProfile} path="/:slug" />
        </Switch>
      </Wrapper>
      <Footer />
    </>
  )
}

export default App
