import React, { useState } from "react";
import Tippy from "@tippyjs/react";

import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { motion } from "framer-motion";

const cardAnim = {
	initial: {
		opacity: 0,
		y: 10,
	},
	animate: {
		opacity: 1,
		y: 0,
	},
	transition: {
		duration: 0.2,
	},
};

const MemberCard = () => {
	const [status, setStatus] = useState(false);
	return (
		<Card variants={cardAnim} status={status}>
			<img
				src="https://yt3.ggpht.com/ytc/AAUvwnjIsCQFPOCaUE22aq383Px8BDwzHQZnWA8b8CSUaQ=s900-c-k-c0x00ffffff-no-rj"
				alt="KSI"
			/>
			<h4 className="name">Chance Mario</h4>
			<p className="status">{status ? "Active" : "Inactive"}</p>
			<ActiveCheckbox
				onClick={() => setStatus(!status)}
				className={`${status ? "active" : ""}`}
			>
				<div className="log "></div>
			</ActiveCheckbox>
			<Tippy
				theme="light"
				trigger="click"
				animation="scale"
				duration={200}
				placement="bottom-end"
				interactive
				content={
					<div style={{ backgroundColor: "#fff", fontWeight: "bold" }}>
						Set as Manager
					</div>
				}
			>
				<button className="option ref-btn">
					<BiDotsVerticalRounded />
				</button>
			</Tippy>
		</Card>
	);
};

const Card = styled(motion.div)`
	width: 100%;
	min-height: 300px;
	max-height: 400px;
	border-radius: 1rem;
	background-color: #faffff;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 2rem 0;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	position: relative;
	box-shadow: 0px 1px 6px rgba(0, 0, 0, 0.1);

	img {
		height: 100px;
		width: 100px;
		border-radius: 50%;
		object-fit: cover;
	}

	.name {
		color: #2e1a1a;
		margin-top: 1.2rem;
		font-size: 1.2rem;
	}

	.status {
		margin-top: 0.5rem;
		color: ${({ status }) => (status ? "#b9b937" : "#a5a598")};
		font-size: 14px;
		padding: 0.3rem 0.7rem;
		border-radius: 0.3rem;
	}

	.option {
		position: absolute;
		top: 0%;
		left: 100%;
		transform: translate(-33px, 10px);
		font-size: 1.7rem;
		cursor: pointer;
		color: #2e1a1a;
	}

	&:hover {
		background-color: var(--bgBlue);

		.name {
			color: #fff;
		}

		.status {
			color: #fff;
			background-color: ${({ status }) => (status ? "#b9b937" : "#a5a598")};
		}
		.option {
			color: #fff;
		}
	}
`;

const ActiveCheckbox = styled.div`
	margin-top: 1rem;
	width: 70px;
	border-radius: 30px;
	height: 36px;
	background-color: #dbdbe4;
	display: flex;
	justify-content: flex-start;
	align-items: center;

	position: relative;

	.log {
		height: 40px;
		min-height: 40px;
		width: 40px;
		min-width: 40px;
		border-radius: 50%;
		background-color: red;
		transition: all 0.2s ease-in-out;
		background-color: #907272;
		position: absolute;
		left: -1%;
		border: 3px solid #fff;
	}

	&.active {
		justify-content: flex-end;

		.log {
			background-color: #72e872;
			left: 50%;
		}
	}
`;

export default MemberCard;
