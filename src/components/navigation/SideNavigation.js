import React from "react";
import { NavLink as LinkN } from "react-router-dom";
import styled from "styled-components";
import { BsPeople } from "react-icons/bs";
import { BiNetworkChart } from "react-icons/bi";
import { FcSurvey } from "react-icons/fc";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineSetting, AiOutlinePieChart } from "react-icons/ai";
import { motion } from "framer-motion";

const SideNavigation = ({ setLocation }) => {
	return (
		<SideNavContainer
			initial={{ x: "-120%" }}
			animate={{ x: "0%" }}
			exit={{ x: "-120%" }}
			transition={{ duration: 0.3 }}
		>
			<NavHeader>
				<h1>CULTURLY</h1>
			</NavHeader>
			<NavMenu>
				<NavItem>
					<NavLink onClick={() => setLocation("My Team")} to="/team">
						<ActivePointer className="pointer"></ActivePointer>
						<BsPeople />
						My Team
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setLocation("Surveys")} to="/survey">
						<ActivePointer className="pointer"></ActivePointer>
						<FcSurvey />
						Survey
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setLocation("Management")} to="/management">
						<ActivePointer className="pointer"></ActivePointer>
						<BiNetworkChart />
						Management
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setLocation("Analytics")} to="/analytics">
						<ActivePointer className="pointer"></ActivePointer>
						<AiOutlinePieChart />
						Analytics
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setLocation("Feedbacks")} to="/feedback">
						<ActivePointer className="pointer"></ActivePointer>
						<VscFeedback />
						Feedbacks
					</NavLink>
				</NavItem>
				<NavItem>
					<NavLink onClick={() => setLocation("Settings")} to="/settings">
						<ActivePointer className="pointer"></ActivePointer>
						<AiOutlineSetting />
						Settings
					</NavLink>
				</NavItem>
			</NavMenu>
		</SideNavContainer>
	);
};

const SideNavContainer = styled(motion.div)`
	max-width: 200px;
	width: 280px;
	min-width: 280px;
	display: flex;
	flex-direction: column;
	align-items: stretch;
	min-height: 100vh;
	max-height: 100vh;
	overflow: auto;
	background-color: #faffff21;
	box-shadow: 0px 0px 6px rgba(0, 0, 0, 0.2);
	position: sticky;
	top: 0;

	@media screen and (max-width: 1000px) {
		background-color: #fff;
		z-index: 100;
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
	}
`;

const NavHeader = styled.div`
	height: 100px;
	max-height: 100px;
	display: flex;
	align-items: center;
	justify-content: center;

	h1 {
		font-size: 1.8rem;
		font-weight: 700;
		color: #000;
		font-family: var(--font-3);
		color: var(--bgBlue);
		letter-spacing: 2px;
	}
`;

const NavMenu = styled.ul`
	flex-grow: 1;
`;

const NavItem = styled.li`
	display: block;
	margin: 1.5rem 0;
`;

const NavLink = styled(LinkN)`
	display: flex;
	align-items: center;
	font-size: 0.875rem;
	padding: 0.5rem 3.4rem;
	font-weight: 500;
	position: relative;
	color: #d3abab;
	transition: 0.2s ease-in-out;

	svg {
		margin-right: 1.6rem;
		font-size: 1.3rem;
	}

	&.active {
		color: var(--bgBlue);

		.pointer {
			background-color: var(--bgBlue);
		}
	}
`;

const ActivePointer = styled.div`
	height: 20px;
	width: 20px;
	border-radius: 50%;
	position: absolute;
	top: 50%;
	left: 0%;
	transform: translate(-70%, -50%);
`;

export default SideNavigation;
