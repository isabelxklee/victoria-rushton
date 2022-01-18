import React from 'react'
import {Wrapper, AppContainer} from './styles'
import {GlobalStyle} from './globalStyle'
import {Switch, Route} from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'
import FontProfile from './pages/FontProfile'
import Success from './pages/Success'

const App = () => {
  return (
    <>
      <GlobalStyle />
      <AppContainer>
        <Wrapper>
          <Header />
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/success">
              <Success />
            </Route>
            <Route component={Home} exact path="/" />
            <Route component={FontProfile} path="/:slug" />
          </Switch>
        </Wrapper>
        <Footer />
      </AppContainer>
    </>
  )
}

export default App
