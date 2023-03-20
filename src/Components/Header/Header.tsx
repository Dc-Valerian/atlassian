import React, {useState} from 'react'
import styled from 'styled-components'
import images from "../Assets/atlas.png"
import {MdKeyboardArrowDown} from "react-icons/md"
import {BiSearch} from "react-icons/bi"
import {CgProfile} from "react-icons/cg"
import Product from './Product'
import Teams from './Teams'
import {BiXCircle} from "react-icons/bi"


const Header = () => {
    const [show, setShow] = useState<Boolean>(false)
    const [show2, setShow2] = useState<Boolean>(false)
    const [show3, setShow3] = useState<Boolean>(false)

    const Toggle = () => {
        setShow(!show)
        setShow2(false)
        setShow3(false)
    }

    const Down = () => {
        setShow2(!show2)
        setShow(false)
        setShow3(false)
    }

    const Shows = () => {
        setShow3(!show3)
        setShow2(false)
        setShow(false)
    }

  return (
    <Container>
        <Wrapper>
            <Right>
                <Images src={images} />
                <NavHold>
                    <Navs onClick={Toggle}>Products <Icons><MdKeyboardArrowDown /></Icons></Navs>
                    <Navs onClick={Down}>For teams <Icons><MdKeyboardArrowDown /></Icons></Navs>
                    <Navs onClick={Shows}>Support <Icons><MdKeyboardArrowDown /></Icons></Navs>
                </NavHold>
            </Right>
            
            <Left>
                <Button>Try now</Button>
                <Button2>Buy now</Button2>

                <Icon><BiSearch /></Icon>
                <hr />
                <Profile>
                    <Prof><CgProfile /></Prof>
                    <Acc>My Account<Ico><MdKeyboardArrowDown /></Ico></Acc>
                </Profile>
            </Left>
        </Wrapper>
        {show ? (
            <Product />
        ): null}
        {show2 ? (
            <Teams 
            st="BY TEAM SIZE"
            up="Startups"
            gr="Great for startups, from imcubator to IPO"
            bu="Small business"
            gt="Get the right tools for growing business"
            ent="Enterprise"
            ln="Learn how we make big teams successful"
            iv="View all products"
            by="BY TEAM FUNCTION"
            sf="Software"
            pl="Plan, build, and ship quality product"
            ma="Marketing"
            br="Bring together a winning strategy"
            hr="HR"
            se="Streamline people management"
            le="Legal"
            op="Operate securely and reliably"
            ope="Operations"
            ru="Run your business efficiently"
            it="IT"
            pro="Provide great service and support"
            fi="Finance"
            sim="Simplify all finance processes"
            inn="Incident Response"
            ress="Respond, resolve and learn from incidents"
            mar="Marketplace"
            app="App that enhance Atlassian products"
            Dev="Developers"
            Doc="Docs and resources to build Atlassian Apps"
            tru="Trust and Security"
            com="Compliance, privacy, platform roadmap, and more"
            wrk="Work Life blog"
            sto="Stories on culture, tect, tips and teams"
            bse="dff"
            />
        ) : null}

        {show3 ? (
            <Teams 
            st="RESOURCES"
            up="Documentation"
            gr="Guides to all of our products"
            bu="Atlassian Migration Program"
            gt="Tools and guidance for migration"
            ent="Cloud Roadmap"
            ln="Upcoming future releases"
            iv=""
            by="SUPPORT SERVICES"
            sf="Enterprice Services"
            pl="Personal support for larg teams"
            ma="Partner support"
            br="Trusted third-party consultant"
            hr="Atlassian Support"
            se="A resource hub for teams and admins"
            le="Purchasing and Licensing"
            op="FAQs about our policies"
            ope="About us"
            ru="Our mission and history"
            it="Careers"
            pro="Job openings, values, and more"
            fi="Atlassian University"
            sim="Trainning and certifications for all skill levels"
            inn="Atlassian Community"
            ress="A forum for connecting, sharing, and learning"
            mar="Marketplace"
            app="App that enhance Atlassian products"
            Dev="Developers"
            Doc="Docs and resources to build Atlassian Apps"
            tru="Trust and Security"
            com="Compliance, privacy, platform roadmap, and more"
            wrk="Work Life blog"
            sto="Stories on culture, tect, tips and teams"
            bse="dff"
            />
        ) : null}
    </Container>
  )
}

export default Header
const Cancle = styled.div`
    font-size: 40px;
    position: absolute;
    right: 20px;
    top: 20px;
    cursor: pointer;
`
const Profile = styled.div`
    width: 150px;
    height: 40px;
    border-radius: 3px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    :hover{
        background-color: #EBEDF0;
    }
`
const Ico = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 5px;
    margin-left: 5px;
    color: #0052CC;
    font-size: 20px;
`
const Acc = styled.h5`
    color: #0052CC;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
`
const Prof = styled.div`
    font-size: 28px;
    margin-left: 15px;
    color: #C2C7CF;
`
const Icon = styled.div`
    font-size: 25px;
    color: #C2C7CF;
    margin-left: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 30px;
    width: 30px;
    :hover{
        background-color: #DFE1E5;
        border-radius: 50px;
    }
`
const Icons = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-end;
    margin-top: 7px;
    margin-left: 5px;
    color: #2684FF;
`

const NavHold = styled.div`
    display: flex;
    margin-left: 20px;
`

const Button2 = styled.div`
    width: 90px;
    height: 33px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    color: #0047B3;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 7px;
    :hover{
        background-color: #EBECF0;
    }
`

const Button = styled.div`
    width: 90px;
    height: 33px;
    background-color: #0b50b8;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
    color: white;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    margin-left: 15px;
    :hover{
        background-color: #0047B3;
    }
`

const Left = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    hr{
        height: 20px;
        background-color: #DFE1E5;
        margin-left: 15px;
    }
`

const Navs = styled.div`
    display: flex;
    align-items: center;
    color: #42526e;
    width: 105px;
    font-size: 17px;
    font-weight: 400;
    margin: 5px;
    cursor: pointer;
    text-decoration: none;
    justify-content: center;
    :hover{
        background-color: #DFE1E5;
        border-radius: 3px;
    }
`

const Mid = styled.div`
    display: flex;
    height: 100%;
`

const Images = styled.img`
    height: 25px;
`

const Right = styled.div`
    width: 250px;
    height: 100%;
    display: flex;
    align-items: center;
`

const Wrapper = styled.div`
    width: 89%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    background-color: none;
    position: relative;
`