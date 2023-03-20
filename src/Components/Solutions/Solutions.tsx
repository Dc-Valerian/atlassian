import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import images from "../Assets/confluence.png"
import images2 from "../Assets/trello.png"
import images3 from "../Assets/jira.png"
import images4 from "../Assets/frsp.png"
import images5 from "../Assets/jiras.png"
import images6 from "../Assets/save.png"
import images7 from "../Assets/jirasoft.png"
import images8 from "../Assets/jiraall.png"
import images9 from "../Assets/compass.png"
import images10 from "../Assets/comp.png"

const Solution = () => {
	const [show, setShow] = useState<Boolean>(true);
	const [show2, setShow2] = useState<Boolean>(false);
	const [show3, setShow3] = useState<Boolean>(false);

	const Toogle = () => {
		setShow(true);
		setShow2(false);
		setShow3(false);
	};
	const Toogle2 = () => {
		setShow2(true);
		setShow(false);
		setShow3(false);
	};
	const Toogle3 = () => {
		setShow3(true);
		setShow2(false);
		setShow(false);
	};

	return (
		<Container>
			<h1>Atlassian solutions are designed for all types of work</h1>

			<ButtonHold>
				<Button bg={show ? "bb" : "" } onClick={Toogle}>
					Work Management
				</Button>
				<Button bg={show2 ? "bb" : ""} onClick={Toogle2}>
					Work Management
				</Button>
				<Button bg={show3 ? "bb" : ""} onClick={Toogle3}>
					Work Management
				</Button>
			</ButtonHold>

			{show ? <Card bg='white' 
            txt="Make work flow across teams while connecting back to company goals" 
            pra="Work differently, together" 
            img={images}
            imge={images2}
            imges={images3}
            imgess={images4}
            con="Confluence"
            coll="Content collaboration"
            tr="Trello"
            clb="Visual project management"
            ji="Jira Work MAnagement"
            bu="Business team collaboration"/> : null}

			{show2 ? <Card bg='white' 
            txt="Enable your dev, IT ops, and business teams to deliver great service experiences" 
            pra="Deliver at high velocity" 
            img={images5} 
            imge=""
            imges=""
            imgess={images6}
            con="Jira Service Management"
            coll="High-velocity ITSM"
            tr=""
            clb=""
            ji=""
            bu=""/> : null}

			{show3 ? <Card bg='white' 
            txt="Run a world-class agile software company—from discovery to delivery and operations" 
            pra="Explore Open DevOps" 
            img={images7} 
            imge={images8}
            imges={images9}
            imgess={images10}
            con="Jira Software"
            coll="Project and issue tracking"
            tr="Jira Allign"
            clb="Enterprise Agile planning"
            ji="Compass"
            bu="Developer experience platform"/> : null}
		</Container>
	);
};

export default Solution;

const View = styled.div`
	width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    margin-top: 70px;
`;
const View1 = styled.div`
	width: 100%;
    height: 100vh;
    background-color: yellow;
    display: flex;
    justify-content: center;
    margin-top: 70px;
	align-items: center;
`;
const View2 = styled.div``;

const ButtonHold = styled.div`
	margin-top: 10px;
`;
const Button = styled.button<{ bg: string }>`
	height: 80px;
	width: 300px;
	border-radius: 50px;
	position: relative;
	border: 0;
	background-color: ${({ bg }) => (bg ? "#deebff" : "#0052cc")};
	color: ${({ bg }) => (bg ? "#0052cc" : "#deebff")};
	font-size: 20px;
	font-weight: bold;
	cursor: pointer;
	transition: all 350ms;
	margin-right: 10px;
	margin-left: 10px;
	/* :hover {
		transform: scale(0.99);
		background-color: #0052cc;
		color: white;
	} */
`;

const Container = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
	flex-direction: column;
	padding-bottom: 50px;
`;