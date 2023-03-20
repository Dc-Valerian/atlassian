import React from 'react'
import styled from 'styled-components';
import images from "../Assets/lefthero.png"
import images2 from "../Assets/right.png"


const Hero = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Text>It’s possible <br />
              <span>with teamwork</span></Text>
          </Left>
          <Right>
            <Images src={images2}/>
          </Right>
        </Wrapper>
    </Container>
  )
}

export default Hero
const Text = styled.h2`
  color: #253858;
  font-size: 55px;
  margin-left: 40px;
  font-weight: 500;
  span{
    margin-left: 65px;
    color: #253858;
  }
`

const Images = styled.img`
  height: 460px;
`
const Right = styled.div`
  width: 55%;
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  align-items: center;
`

const Left = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  background-image: url(${images});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  height: 100%;
`


const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    justify-content: center;
`