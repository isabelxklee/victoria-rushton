import React from 'react'
import {Wrapper, GlobalStyles} from '../styles'

const PageTemplate = ({children}) => {
  return (
    <Wrapper>
      <GlobalStyles />
      {children}
    </Wrapper>
  )
}

export default PageTemplate
