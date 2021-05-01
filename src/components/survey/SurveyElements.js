import { motion } from "framer-motion";
import styled from "styled-components";

export const SurveyContainer = styled(motion.div)`
	padding: 0rem 1rem;
	/* display: grid;
	grid-template-rows: auto;
	grid-template-areas: "surveys sidebar"; */
	display: flex;
`;

export const Surveys = styled.div`
	grid-area: surveys;
	flex-grow: 1;
`;

export const SurveyHeader = styled.div`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	/* grid-template-columns: 0.5fr 0.5fr 1fr 1fr; */
	padding: 0 1rem;
`;

export const SurveyHeaderItem = styled.div`
	padding: 1.5rem 0;
	font-weight: bolder;
	font-size: 14px;
	color: #655d53;
`;

export const SurveyList = styled.ul`
	list-style: none;
`;

export const SurveyListItem = styled(motion.li)`
	padding: 0.5rem 1rem;
	margin: 0.5rem;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	align-items: center;
	border-radius: 0.5rem;
	transition: 0.2s ease-in-out;
	cursor: pointer;
	user-select: none;
	position: relative;

	&:nth-child(2n + 1) {
		background-color: #d8fbd8;
	}

	.option {
		position: absolute;
		margin-left: 96%;
		font-size: 1.7rem;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}

	&:hover {
		background-color: var(--bgBlue);
		color: #fff;

		.option {
			color: #fff;
		}
	}
`;

export const SurveyType = styled.div`
	h4 {
		font-size: 15px;
	}
`;
export const SurveySchedule = styled.div`
	.schedule {
		padding: 0.3rem 1rem;
		background-color: #9bd054;
		color: #fff;
		border-radius: 0.3rem;
		display: inline-block;
		font-size: 14px;
		font-weight: bold;
	}
`;
export const SurveyChannel = styled.div`
	h4 {
		font-size: 15px;
	}
`;
export const SurveyTeam = styled.div`
	direction: rtl;
	text-align: left;
	padding-left: 25px;

	.avatar img {
		border-radius: 50%;
		position: relative;
		left: -5px;
		margin-left: -25px;
		z-index: 1;
		border: 2px solid #fff;
	}
`;

export const SurveySideView = styled.div`
	max-width: 300px;
	width: 300px;
	grid-area: sidebar;
	padding: 1rem;
	max-height: fit-content;
	border-left: 1px solid rgba(0, 0, 0, 0.1);
	position: sticky;
	top: 0;
`;

export const SurveySideViewHeader = styled.h1`
	font-weight: bold;
	font-size: 1.4rem;
`;

export const SurveyTypeContainer = styled.div`
	border-bottom: 1px solid #ffdfdf;

	.type-menu {
		display: flex;
		align-items: center;
		color: rgba(0, 0, 0, 0.5);

		.type-item {
			font-size: 0.8rem;
			font-weight: 500;
			padding: 0.5rem 0;
			cursor: pointer;

			&.active {
				color: var(--bgBlue);
				border-bottom: 3px solid var(--bgBlue);
			}

			&:nth-child(2n + 2) {
				margin-left: 0.5rem;
			}
		}
	}
`;
