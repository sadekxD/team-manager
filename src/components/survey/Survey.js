import Tippy from "@tippyjs/react";
import React, { useEffect } from "react";
import styled from "styled-components";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { MdClose } from "react-icons/md";

// Styles
import {
	SurveyContainer,
	Surveys,
	SurveyHeader,
	SurveyHeaderItem,
	SurveyList,
	SurveyChannel,
	SurveyType,
	SurveyTeam,
	SurveySchedule,
	SurveyListItem,
	SurveySideView,
	SurveyTypeContainer,
	SurveySideViewHeader,
} from "./SurveyElements";
import { AnimatePresence } from "framer-motion";

const data = [
	{
		url: "https://www.fillmurray.com/150/150",
	},
	{
		url: "https://www.fillmurray.com/100/100",
	},
	{
		url: "https://www.fillmurray.com/150/150",
	},
	{
		url: "https://www.fillmurray.com/100/100",
	},
	{
		url: "https://www.fillmurray.com/50/50",
	},
];

const surveyAnim = {
	initial: { opacity: 0 },
	animate: {
		opacity: 1,
		transition: {
			duration: 0.4,
			staggerChildren: 0.1,
		},
	},
};

const listAnim = {
	initial: {
		opacity: 0,
		x: 30,
	},
	animate: {
		opacity: 1,
		x: 0,
	},
	transition: {
		duration: 0.2,
	},
};

const Survey = () => {
	return (
		<AnimatePresence>
			<SurveyContainer
				initial={{ opacity: 0, y: 50 }}
				animate={{ opacity: 1, y: 0 }}
				exit={{ opacity: 1 }}
				transition={{ duration: 0.6 }}
			>
				<Surveys>
					<SurveyHeader>
						<SurveyHeaderItem>Type</SurveyHeaderItem>
						<SurveyHeaderItem>Schedule</SurveyHeaderItem>
						<SurveyHeaderItem>Channel</SurveyHeaderItem>
						<SurveyHeaderItem>Team</SurveyHeaderItem>
					</SurveyHeader>
					<SurveyList variants={surveyAnim} initial="initial" animate="animate">
						{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => (
							<SurveyListItem variants={listAnim} key={i}>
								<SurveyType>
									<Tippy
										theme="light"
										animation="scale"
										duration={200}
										placement="bottom-start"
										interactive
										content={
											<div
												style={{
													backgroundColor: "#fff",
													fontWeight: "bold",
													padding: ".5rem",
												}}
											>
												Business developement mood check
											</div>
										}
									>
										<h4>Mood Check</h4>
									</Tippy>
								</SurveyType>
								<SurveySchedule>
									<div className="schedule">Daily</div>
								</SurveySchedule>
								<SurveyChannel>
									<h4>Culturely Beta</h4>
								</SurveyChannel>
								<SurveyTeam>
									{data.slice(0, 4).map((img, index) => (
										<span key={index} class="avatar">
											<img src={img.url} width="40" height="40" />
										</span>
									))}
								</SurveyTeam>
								<Tippy
									theme="light"
									animation="scale"
									trigger="click"
									duration={200}
									placement="bottom-start"
									interactive
									content={
										<div
											style={{
												backgroundColor: "#fff",
												fontWeight: "bold",
												color: "#21dd21",
												padding: ".5rem",
											}}
										>
											deactivate
										</div>
									}
								>
									<button className="option">
										<BiDotsVerticalRounded />
									</button>
								</Tippy>
							</SurveyListItem>
						))}
					</SurveyList>
				</Surveys>
				<SurveySideView>
					<SurveySideViewHeader>Survey View</SurveySideViewHeader>
					<SurveyTypeContainer>
						<ul className="type-menu">
							<li className="type-item active">Mood Check</li>
							<li className="type-item">Pulse Check</li>
						</ul>
					</SurveyTypeContainer>
					<ScheduleContainer>
						<div className="col">
							<h4>Shedule</h4>
							<div className="status schedule-status">Weekly</div>
						</div>
						<div className="col">
							<h4>Time</h4>
							<div className="status time-status">17:31 GMT(4+)</div>
						</div>
						<div className="col">
							<h4>Day</h4>
							<div className="status day-status">Sunday</div>
						</div>
					</ScheduleContainer>
					<QuestionsContainer>
						<h2>Questions</h2>
						<Question>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
						</Question>
						<Question>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.?
							</p>
						</Question>
						<Question>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit?</p>
						</Question>
						<Question>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua?
							</p>
						</Question>
						<AddMemberContainer>
							<h2>Add Member</h2>
							<form>
								<input type="text" placeholder="Add team" />
							</form>
							<MemberContainer>
								{[1, 2, 3].map((m) => (
									<div key={m} className="member">
										<div className="info">
											<img
												src="https://cdn.vox-cdn.com/thumbor/RsL5FNihoaV9odgkWQWIATp1xr0=/0x16:1103x751/1400x1400/filters:focal(0x16:1103x751):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/46840054/Screenshot_2015-07-27_15.11.13.0.0.png"
												alt="name"
											/>
											<h4 className="name">Bugs Bunny</h4>
										</div>
										<div className="icon">
											<MdClose />
										</div>
									</div>
								))}
							</MemberContainer>
						</AddMemberContainer>
					</QuestionsContainer>
				</SurveySideView>
			</SurveyContainer>
		</AnimatePresence>
	);
};

const ScheduleContainer = styled.div`
	border-radius: 0.3rem;
	border: 1px solid rgba(0, 0, 0, 0.1);
	margin-top: 1.5rem;

	display: grid;
	grid-template-columns: repeat(3, 1fr);

	.col {
		width: 100%;
		padding: 0.5rem;

		h4 {
			font-size: 0.8rem;
			font-weight: 500;
		}

		.status {
			font-size: 0.7rem;
		}

		.schedule-status {
			padding: 0.2rem 0.5rem;
			color: #fff;
			border-radius: 0.3rem;
			display: inline-block;
			background-color: #dabfbf;
		}
	}
`;

const QuestionsContainer = styled.ul`
	margin-top: 2rem;
	h2 {
		font-size: 1rem;
	}
`;

const Question = styled.li`
	display: flex;
	align-items: center;
	padding: 0.3rem;
	background-color: #ffcbcb;
	font-size: 0.8rem;
	margin: 0.4rem 0;
`;

const AddMemberContainer = styled.div`
	margin-top: 2rem;
	h2 {
		font-size: 1rem;
	}

	form {
		background-color: #fff3f3;
		display: flex;
		padding: 0.7rem 0.5rem;
		align-items: center;
		border-radius: 0.4rem;
		border: 1px solid #d5bebe;
		margin-top: 3px;
		width: 100%;

		input {
			font-size: 0.8rem;
			width: 100%;
			padding: 0.6rem 0.5rem;
			font-size: var(--font-3);
		}
	}
`;

const MemberContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;

	.member {
		display: flex;
		align-items: center;
		justify-content: space-between;
		padding: 0.5rem;
		margin-left: 0.5rem;
		margin-top: 0.4rem;
		border-radius: 3rem;
		border: 1px solid rgba(0, 0, 0, 0.1);
		cursor: pointer;
		transition: 0.2s ease-in-out;

		.info {
			display: flex;
			align-items: center;

			img {
				height: 30px;
				width: 30px;
				border-radius: 50%;
			}

			.name {
				font-size: 0.7rem;
				margin-left: 0.5rem;
				font-weight: 400;
			}
		}

		.icon {
			display: flex;
		}

		&:hover {
			background-color: #fa0d0d;
			color: #fff;

			.icon {
				color: #fff;
			}
		}
	}
`;

export default Survey;
