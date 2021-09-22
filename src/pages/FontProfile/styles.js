import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

export const StyledBlock = styled(BlockContent)`
  font-size: ${({$fontSize}) => $fontSize}px;
`
