import styled from 'styled-components'
import {HeroContainer} from '../FontProfile/styles'

export const ProfilePic = styled.img`
  border-radius: 100%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border: 2px solid #1e1e1e;
  filter: grayscale(100%);
  margin: 0 100px;
`

export const IntroContainer = styled(HeroContainer)`
  display: flex;
  gap: 40px;
`
