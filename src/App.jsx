import React, {useEffect} from 'react'
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
  // const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      // const response = await fetch('https://victoria-rushton-express.herokuapp.com/express-backend')
      // const body = await response.json()
      // setData(body.express)
    }

    fetchData()
  }, [])

  return (
    <>
      <GlobalStyle />
      <Wrapper>
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
          <Route component={Home} exact path="/" />
          <Route component={FontProfile} path="/:slug" />
        </Switch>
      </Wrapper>
      <Footer />
    </>
  )
}

export default App
