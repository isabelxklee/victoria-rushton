import styled from 'styled-components'
import {Colors} from '../../styles/global-styles'
import {HeroContainer} from '../../styles/component-styles'

export const ProfilePic = styled.img`
  border-radius: 100%;
  width: 280px;
  height: 280px;
  object-fit: cover;
  border: 2px solid ${Colors.black};
  margin: 40px 80px 20px 0;

  @media (max-width: 900px) {
    margin: 0;
    width: 200px;
    height: 200px;
  }
`

export const IntroContainer = styled(HeroContainer)`
  display: flex;
  border-bottom: none;

  @media (max-width: 900px) {
    display: block;
    padding: 60px 0;
    text-align: center;
  }
`

export const PressContainer = styled.div`
  background: ${Colors.black};
  color: ${Colors.white};
  width: calc(100vw - 160px);
  margin-left: calc(50% - 50vw);
  padding: 80px;

  @media (max-width: 900px) {
    padding: 40px;
    width: calc(100vw - 80px);
  }
`

export const PressArticleTitle = styled.a`
  text-transform: uppercase;
  font-weight: 700;
  font-size: 16px;
  text-decoration: none;
  color: ${Colors.white};
`

export const PressArticleContainer = styled.div`
  margin: 48px 0;
`

export const Container = styled.div`
  border-left: 2px solid ${Colors.white};
  padding-left: 50px;

  @media (max-width: 900px) {
    padding-left: 0;
    border-left: none;
  }
`
