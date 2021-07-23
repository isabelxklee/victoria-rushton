import React, {useEffect, useState} from 'react'
import {GlobalStyle} from './styles'
import {Switch, Route} from 'react-router-dom'
// import About from './pages/Home'
// import Type from './pages/Type'
import Home from './pages/Home'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/express-backend')
      const body = await response.json()

      if (!response.ok) {
        console.log(body.message)
      }

      setData(body.express)
    }

    fetchData()
  }, [])

  console.log(data)

  return (
    <>
      <GlobalStyle />
      {/* <form action="/create-checkout-session" method="POST">
        <button type="submit">Checkout</button>
      </form> */}
      <Header />
      <Footer />
      <Switch>
        {/* <Route path="/about">
          <About />
        </Route>
        <Route path="/type">
          <Type />
        </Route> */}
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  )
}

export default App
