import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

export const StyledBlock = styled(BlockContent)`
  font-size: ${(props) => props.$fontSize}px;
  font-weight: ${(props) => props.$fontWeight};
`
