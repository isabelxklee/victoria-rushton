import styled from 'styled-components'
import BlockContent from '@sanity/block-content-to-react'

export const StyledBlock = styled(BlockContent)`
  font-size: ${(props) => props.$fontSize}px;
  font-weight: ${(props) => props.$fontWeight};
`

export const TypeTesterBackground = styled.div`
  background: #1f1f1f;
  border: 2px solid #1f1f1f;
  margin-top: 100px;
`
