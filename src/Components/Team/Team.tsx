import React from 'react'
import styled from 'styled-components'
import images from "../Assets/setting.png"
import Events from './Events'
import Life from './Life'

const Team = () => {
  return (
    <Container>
        <Wrapper>
            <Left>
                <Top>TEAM ESSENTIALS</Top>
                <Bold>Explore resources to <br /> unleash the potential <br /> of your team</Bold>
            </Left>
            <Right>
                <Up>
                    <Images src={images} />
                </Up>
                <Down>
                    <Atlas>Atlassian Community</Atlas>
                    <Conn>Connect globally and meet locally to get more out of our products.</Conn>
                    <End>
                        <Sea>Search the forum</Sea>
                        <Join>Join our community</Join>
                    </End>
                </Down>
            </Right>
        </Wrapper>
        <Life />
        <Events />
    </Container>
  )
}

export default Team

const Join = styled.div`
    color: #0052cc;
    cursor: pointer;
`

const Sea = styled.div`
    color: #0052cc;
    cursor: pointer;
`

const End = styled.div`
    width: 50%;
    display: flex;
    height: 20px;
    justify-content: space-between;
    margin-top: 25px;
`

const Conn = styled.div`
    color: #253858;
    font-weight: 500;
`

const Atlas = styled.h3`
    font-size: 1.5rem;
    line-height: 1.33333333;
    margin-bottom: 19px;
    color: #253858;
    letter-spacing: .3px;
    font-weight: 500;
`

const Down = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    flex-direction: column;
    background-color: #FFEBE5;
    align-items: center
`

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const Up = styled.div`
    width: 100%;
    height: 60%;
`

const Right = styled.div`
    width: 65%;
    height: 420px;
    display: flex;
    flex-direction: column;
    border-radius: 3px;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
    :hover{
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    }
`

const Bold = styled.h1`
    color: #091e42;
`

const Top = styled.h5`
    color: #008da6 !important;
    font-size: 16px;
    font-weight: 700;
    letter-spacing: 1.6px;
    margin-bottom: 16px;
    margin-top: 70px;
`

const Left = styled.div`
    width: 35%;
    display: flex;
    flex-direction: column;
`

const Wrapper = styled.div`
    width: 90%;
    display: flex;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    padding-top: 120px;
    justify-content: center;
    padding-bottom: 60px;
    flex-direction: column;
    align-items: center;
`