import React, {useEffect, useState} from 'react'
import {GlobalStyle} from './styles'
import {Switch, Route} from 'react-router-dom'
// import About from './pages/Home'
// import Type from './pages/Type'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  // const [data, setData] = useState(null)
  const [fonts, setFonts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('https://victoria-rushton-express.herokuapp.com/express-backend')
      // const body = await response.json()
      // setData(body.express)

      const responseFonts = await fetch('https://victoria-rushton-db.herokuapp.com/fonts')
      const bodyFonts = await responseFonts.json()
      setFonts(bodyFonts)
    }

    fetchData()
  }, [])

  return (
    <>
      <GlobalStyle />
      {/* <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form> */}
      <Header />
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/type">
          <Type />
        </Route> */}
        <Route exact path="/">
          <Home fonts={fonts} />
        </Route>
      </Switch>
      <Footer />
    </>
  )
}

export default App
