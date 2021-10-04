import styled from 'styled-components'
import {Colors} from '../../styles'

export const FooterContainer = styled.div`
  background: #1e1e1e;
  color: ${Colors.white};
  padding: 32px 80px;
  position: relative;
  bottom: 0;
  width: calc(100vw - 160px);

  @media (max-width: 900px) {
    padding: 20px;
    width: calc(100% - 40px);
  }
`
