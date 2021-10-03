import styled from 'styled-components'
import {HeroContainer} from '../FontProfile/styles'

export const ProfilePic = styled.img`
  border-radius: 100%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border: 2px solid #1e1e1e;
  margin: 70px 100px;
`

export const IntroContainer = styled(HeroContainer)`
  display: flex;
  border-bottom: none;
`

export const PressContainer = styled.div`
  background: #1e1e1e;
  color: #f4f4f4;
  width: 100vw;
  margin-left: calc(50% - 50vw);
  padding: 80px;
`
