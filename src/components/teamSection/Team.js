import React, { useEffect } from "react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { AiOutlineSearch } from "react-icons/ai";
import Form from "../Form";
import MemberCard from "./MemberCard";
import AddMember from "./AddMember";

const teamAnim = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const Team = ({ setLocation }) => {
	// useEffect(() => {
	// 	setLocation("My Team");
	// }, []);

	return (
		<AnimatePresence>
			<TeamContainer
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<TeamHeaderContainer>
					<Form formType="normal" placeholder="Team name" label="Team Name" />
					<Form
						icon={<AiOutlineSearch />}
						placeholder="Search name"
						label="Search name"
					/>
				</TeamHeaderContainer>
				<TeamsContainer variants={teamAnim} initial="initial" animate="animate">
					{[1, 2, 3, 4, 5].map((m) => (
						<MemberCard key={m} />
					))}
				</TeamsContainer>
				<AddTeamMemberContainer>
					<AddMember icon={<AiOutlineSearch />} />
					<Button>Add</Button>
				</AddTeamMemberContainer>
			</TeamContainer>
		</AnimatePresence>
	);
};

const TeamContainer = styled(motion.div)`
	padding: 0 1rem;
	padding-bottom: 1rem;
	width: 100%;
	display: grid;
	grid-template-rows: max-content;
	grid-template-columns: 1fr;
	grid-template-areas:
		"header sidebar"
		"main sidebar";
`;

const TeamHeaderContainer = styled.div`
	grid-area: header;
	padding: 1rem 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const TeamsContainer = styled(motion.div)`
	padding: 0rem 1rem;
	grid-area: main;
	display: grid;
	grid-template-rows: auto;
	gap: 20px;
	grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
`;

const AddTeamMemberContainer = styled.div`
	grid-area: sidebar;
	max-height: calc(100vh - 100px);
	width: 280px;
	min-width: 280px;
	padding: 0 1rem;
	border-left: 1px solid rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;

	&::after {
		content: "";
		position: absolute;
		z-index: 1;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
		min-height: 100%;
		width: 100%;
		pointer-events: none;
		background-image: linear-gradient(
			to bottom,
			rgba(255, 255, 255, 0),
			rgba(255, 255, 255, 1) 180%
		);
	}
`;

const Button = styled.button`
	width: 95%;
	padding: 0.5rem 1rem;
	font-size: 1.2rem;
	background-color: var(--bgBlue);
	border-radius: 0.3rem;
	position: absolute;
	/* top: calc(100vh - 200px); */
	top: 90%;
	margin-left: auto;
	margin-right: auto;
	color: #fff;
	z-index: 2;
	font-family: var(--font-3);
	cursor: pointer;
`;

export default Team;
