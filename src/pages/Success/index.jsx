import React from 'react'
import {H2, PSpace, Button} from '../../styles'
import {SuccessContainer} from './styles'

const Success = () => {
  return (
    <SuccessContainer>
      <H2>Thank you for trying out my fonts for your next project!</H2>
      <PSpace>
        Please check your email for the font files and your Trial License Agreement, and feel free
        to get in touch with any questions.”
      </PSpace>
      <Button>Back to fonts</Button>
    </SuccessContainer>
  )
}

export default Success
