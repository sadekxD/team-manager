import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import Form from "../Form";
import NewMemberCard from "./NewMemberCard";

const listAnim = {
	animate: {
		transition: {
			duration: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const AddMember = ({ icon }) => {
	return (
		<NewMemberContainer>
			<NewMemberHeader>
				<h2>Add team member</h2>
				<span>Clear all</span>
			</NewMemberHeader>
			<Form
				icon={icon}
				formType="search"
				placeholder="Search member name here..."
			/>
			<MembersList variants={listAnim} initial="initial" animate="animate">
				{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((m) => (
					<NewMemberCard key={m} />
				))}
			</MembersList>
		</NewMemberContainer>
	);
};

const NewMemberContainer = styled.div`
	display: flex;
	align-items: stretch;
	flex-direction: column;
	min-height: calc(100vh - 100px);
	max-height: calc(100vh - 100px);
	overflow: auto;
	padding-top: 1rem;
	padding-bottom: 8rem;

	::-webkit-scrollbar {
		width: 2px;
	}
`;

const NewMemberHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 1rem;

	h2 {
		font-size: 1.1rem;
		font-family: var(--font-3);
	}

	span {
		font-size: 11px;
		cursor: pointer;
	}
`;

const MembersList = styled(motion.ul)``;

export default AddMember;
