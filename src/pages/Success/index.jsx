import React from 'react'
import {H2, PSpace, Button, Margin} from '../../styles'
import {SuccessContainer} from './styles'
import {useHistory} from 'react-router-dom'

const Success = () => {
  let history = useHistory()

  return (
    <SuccessContainer>
      <H2>Thank you for trying out my fonts for your next project!</H2>
      <Margin $margin="20px 0" />
      <PSpace>
        Please check your email for the font files and your Trial License Agreement, and feel free
        to get in touch with any questions.”
      </PSpace>
      <Margin $margin="40px 0" />
      <Button onClick={() => history.push('/')}>Back to fonts</Button>
    </SuccessContainer>
  )
}

export default Success
