import React from "react";
import styled from "styled-components";
import { history, useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import wave from "./wave.png";

const Signin = ({ setIsAuhthenticated }) => {
	const history = useHistory();

	return (
		<SigninContainer>
			<img className="img-bg" src={wave} alt="wave" />
			<div className="signin-wrap">
				<h2 className="header">CULTURELY</h2>
				<div className="desc">
					<h2>
						Company <span>Culture</span> <span>Platform</span>
					</h2>
					<h2>for Distribute teams</h2>
				</div>
				<div className="sub">
					Manage your company culture seamlessly inside your workspace
				</div>
				<button
					className="btn-signin"
					onClick={() => {
						history.push("/team");
						setIsAuhthenticated(true);
					}}
				>
					<FcGoogle />
					Signin with Google
				</button>
			</div>
		</SigninContainer>
	);
};

const SigninContainer = styled(motion.div)`
	height: 100vh;
	min-height: 100vh;
	max-height: 100vh;
	width: 100vw;
	max-width: 100vw;
	min-width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;

	.img-bg {
		position: fixed;
		min-width: 100vw;
		min-height: 100vw;
		z-index: -100;
	}

	.signin-wrap {
		max-width: 440px;
		min-height: 65vh;
		width: 88vw;
		border-radius: 10% 0% 10% 0%;
		font-family: "Poppins", sans-serif;
		box-shadow: 0px 0px 25px -6px rgba(0, 0, 0, 0.2);
		padding: 2rem 1rem;
		display: flex;
		flex-direction: column;
		align-items: center;
		background-color: #fff;

		.header {
			font-size: 2rem;
			letter-spacing: 2px;
		}

		.desc {
			text-align: center;
			margin-top: 2.5rem;
			h2 {
				font-size: 1.3rem;
				line-height: 1.5;
				margin: 0;
				font-weight: 600;

				span:nth-child(1) {
					color: red;
				}

				span:nth-child(2) {
					color: blue;
				}
			}
		}

		.sub {
			margin-top: 1.2rem;
			text-align: center;
			font-size: 0.9rem;
			color: #9d8080;
		}

		.btn-signin {
			border: none;
			background-color: transparent;
			font-size: "poppins";
			padding: 0.5rem 1rem;
			border-radius: 0.3rem;
			margin-top: 3rem;
			font-size: 1rem;
			border: 1px solid rgba(0, 0, 0, 0.15);
			display: flex;
			align-items: center;
			cursor: pointer;
			font-size: 1rem;
			font-weight: 500;
			color: rgba(0, 0, 0, 0.85);

			svg {
				margin-right: 1rem;
			}

			&:focus {
				outline: none;
			}
		}
	}
`;

export default Signin;
