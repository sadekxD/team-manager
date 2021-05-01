import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

const TopNavbar = ({ CurrentLocation, handleSideNav }) => {
	return (
		<TopNavContainer>
			<div onClick={handleSideNav} className="toggle-nav">
				<AiOutlineMenu />
			</div>
			<TopNavHeader>{CurrentLocation}</TopNavHeader>
			<NavProfile>
				<NavProfileInfo>
					<img
						src="https://yt3.ggpht.com/ytc/AAUvwnhPRS7ebQ_YY68jxN4c1VeovWKo4rR0ovbuJbpzTQ=s900-c-k-c0x00ffffff-no-rj"
						alt="kayne"
					/>
					<h4>Hi, Kayne</h4>
				</NavProfileInfo>
				<MdKeyboardArrowDown />
			</NavProfile>
		</TopNavContainer>
	);
};

const TopNavContainer = styled.nav`
	height: 100px;
	min-height: 100px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 2rem;
	/* border-bottom: 2px solid rgba(0, 0, 0, 0.1); */
	position: relative;

	.toggle-nav {
		display: none;
		font-size: 2rem;

		@media screen and (max-width: 1000px) {
			display: flex;
		}
	}

	&::after {
		content: "";
		width: calc(100% - 4rem);
		left: 50%;
		transform: translateX(-50%);
		position: absolute;
		height: 1px;
		top: 100%;
		background-color: rgba(0, 0, 0, 0.1);
	}
`;

const TopNavHeader = styled.h1`
	font-family: var(--font-3);
	font-size: 1.8rem;

	@media screen and (max-width: 1000px) {
		display: none;
	}
`;

const NavProfile = styled.div`
	display: flex;
	align-items: center;
	border-radius: 0.7rem;
	border: 1px solid #d6c7c7;
	padding: 1rem 1rem;
	justify-content: space-between;
`;

const NavProfileInfo = styled.div`
	display: flex;
	align-items: center;
	cursor: pointer;

	img {
		height: 50px;
		width: 50px;
		border-radius: 0.5rem;
		object-fit: cover;
	}

	h4 {
		font-weight: 500px;
		font-size: 1rem;
		margin: 0 0.2rem;
	}
`;

export default TopNavbar;
