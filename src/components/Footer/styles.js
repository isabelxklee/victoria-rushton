import styled from 'styled-components'
import {Colors} from '../../styles'

export const FooterContainer = styled.div`
  background: ${Colors.black};
  color: ${Colors.white};
  padding: 32px 80px;
  position: absolute;
  bottom: 0;
  width: calc(100vw - 160px);
  height: 20px;

  > p {
    font-size: 14px;
  }

  @media (max-width: 900px) {
    padding: 20px 20px 40px 20px;
    width: calc(100% - 40px);
    height: 40px;

    > p {
      font-size: 12px;
    }
  }
`
