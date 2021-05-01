import { motion } from "framer-motion";
import React from "react";
import { useState } from "react";
import styled from "styled-components";

const anim = {
	initial: {
		opacity: 0,
		x: 50,
	},
	animate: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 1,
		},
	},
};

const NewMemberCard = () => {
	const [checked, setChecked] = useState(false);
	return (
		<NewMemberContainer variants={anim} checked={checked}>
			<MemberInfo>
				<img
					src="https://www.imore.com/sites/imore.com/files/styles/large/public/field/image/2021/03/mario-hero.jpg"
					alt="mario"
				/>
				<h4>Mario Rechard</h4>
			</MemberInfo>
			<Select checked={checked} onClick={() => setChecked(!checked)}>
				<input
					type="checkbox"
					onChange={() => console.log("checked")}
					checked={checked}
				/>
				<div className="check"></div>
			</Select>
		</NewMemberContainer>
	);
};

const NewMemberContainer = styled(motion.li)`
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: all 0.2s ease-in-out;
	padding: 0.8rem 1rem;
	box-shadow: ${({ checked }) =>
		checked ? "none" : "0px 2px 10px rgba(0, 0, 0, 0.1)"};
	margin: 1rem 0;
	border-radius: 0.5rem;
	cursor: pointer;
	background-color: #fff;
`;

const MemberInfo = styled.div`
	display: flex;
	align-items: center;

	img {
		width: 40px;
		height: 40px;
		object-fit: cover;
		border-radius: 50%;
	}

	h4 {
		font-weight: bold;
		font-size: 0.8rem;
		margin-left: 0.7rem;
	}
`;

const Select = styled.div`
	input[type="checkbox"] {
		display: none;
	}
	height: 25px;
	width: 25px;
	border-radius: 50%;
	background-color: ${({ checked }) => (checked ? "#65c765" : "transparent")};
	border: ${({ checked }) => (checked ? "none" : "1px solid #e9c4c4")};
	display: flex;
	align-items: center;
	justify-content: center;
	cursor: pointer;

	.check {
		height: 10px;
		width: 15px;
		border-bottom: 2px solid #fff;
		border-left: 2px solid #fff;
		transform: rotate(-45deg) translateY(-1px);
		display: ${({ checked }) => (checked ? "block" : "none")};
	}
`;

export default NewMemberCard;
