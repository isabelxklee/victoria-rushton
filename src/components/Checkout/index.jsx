import React, {useState, useEffect} from 'react'
import {Button} from '../../styles'

const Message = ({message}) => (
  <section>
    <p>{message}</p>
  </section>
)

const CheckoutForm = ({disableCheckout}) => {
  const [message, setMessage] = useState('')

  useEffect(() => {
    const query = new URLSearchParams(window.location.search)

    if (query.get('success')) {
      setMessage('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      setMessage("Order canceled -- continue to shop around and checkout when you're ready.")
    }
  }, [])

  return (
    <>
      {message && <Message message={message} />}

      <form action="/create-checkout-session" method="POST">
        <Button type="submit" $disabled={disableCheckout()}>
          Checkout
        </Button>
      </form>
    </>
  )
}

export default CheckoutForm
