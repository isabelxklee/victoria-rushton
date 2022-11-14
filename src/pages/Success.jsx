import React from 'react'
import {useNavigate} from 'react-router-dom'
import * as Global from '../styles/global-styles'
import * as Component from '../styles/component-styles'

const Success = () => {
  let navigate = useNavigate()

  return (
    <Component.SuccessContainer>
      <Global.H2>Thank you for trying out my fonts for your next project!</Global.H2>
      <Global.Margin $margin="20px 0" />
      <Global.PSpace>
        Please check your email for the font files and your Trial License Agreement, and feel free
        to get in touch with any questions.
      </Global.PSpace>
      <Global.Margin $margin="40px 0" />
      <Global.Button onClick={() => navigate('/')}>Back to fonts</Global.Button>
    </Component.SuccessContainer>
  )
}

export default Success
