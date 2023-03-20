import React from 'react'
import styled from 'styled-components'
import images from "../Assets/careerleft.png"
import images2 from "../Assets/car.png"

const Career = () => {
  return (
    <Container>
        <Top>CAREERS</Top>
        <Wrapper>
            <Left></Left>
            <Mid>
                <Up>We can’t do it alone</Up>
                <P>We have an ambitious road ahead, and we’re looking for people to join <br />
                 our global team to help shape the future of Atlassian.</P>
                 <Button>Join the team</Button>
            </Mid>
            <Left2></Left2>
        </Wrapper>
    </Container>
  )
}

export default Career
const Button = styled.div`
    width: 110px;
    height: 35px;
    background-color: #0b50b8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    margin-top: 50px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 15px;
    :hover{
        background-color: #0047B3;
    }
`

const P = styled.div`
    color: #42526e;
    font-size: 1.25rem;
    letter-spacing: .3px;
    line-height: 1.4;
    text-align: center;
    margin-top: 25px;
`

const Up = styled.h1`
    font-size: 2.75rem;
    line-height: 1.18181818;
    margin-bottom: 16px;
    color: #253858;
    letter-spacing: 0;
    font-weight: 500;
    margin: 0;
    margin-top: 60px;
`

const Mid = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Images = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    margin-left: -70px;
`
const Left2 = styled.div`
    width: 25%;
    height: 330px;
    background-image: url(${images2});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Left = styled.div`
    width: 25%;
    height: 330px;
    background-image: url(${images});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`

const Wrapper = styled.div`
    width: 100%;
    display: flex;
`

const Top = styled.h5`
    color: #008da6 !important;
    font-weight: bold;
    font-size: 16px;
    letter-spacing: .6px;
    margin-bottom: -50px;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 40px;
    overflow: hidden;
`