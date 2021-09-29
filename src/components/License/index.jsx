import React, {useState} from 'react'
import {ButtonContainer} from './styles'

const License = ({font}) => {
  const [data, setData] = useState(null)

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://victoria-rushton-express.herokuapp.com/express-backend')
  //     // const response = await fetch('https://localhost:5000')
  //     const body = await response.json()
  //     setData(body.express)
  //   }

  //   fetchData()
  // }, [])

  // console.log(data)

  return (
    // <form action="/create-checkout-session" method="POST">
    //   <button type="submit">Checkout</button>
    // </form>
    <>
      <h2>License this font</h2>
      <h3>Select weight</h3>
      <ButtonContainer>
        <div>
          {font && font.weights.map((weight) => <button key={weight._id}>{weight.title}</button>)}
          <button>{font.slants.length === 1 ? 'Select all' : 'Select all Roman'}</button>
        </div>
        <div>
          {font.slants.includes('Italic') &&
            font.weights.map((weight) => <button key={weight._id}>{weight.title} Italic</button>)}
          <button>Select all Italic</button>
        </div>
      </ButtonContainer>
      <h3>Select license</h3>
    </>
  )
}

export default License
