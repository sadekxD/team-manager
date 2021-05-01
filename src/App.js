import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import styled from "styled-components";
import SideNavigation from "./components/navigation/SideNavigation";
import TopNavbar from "./components/navigation/TopNavbar";
import Survey from "./components/survey/Survey";
import Team from "./components/teamSection/Team";

// Tippy
import "tippy.js/dist/tippy.css";
import "tippy.js/themes/light.css";
import "tippy.js/animations/scale.css";

// Style
import { GlobalStyle } from "./styles/GlobalStyle";
import Signin from "./components/signin/Signin";
import { AnimatePresence } from "framer-motion";

function App() {
	const [location, setLocation] = useState("My Team");
	const [isAuhtenticated, setIsAuhthenticated] = useState(true);
	const [sideNavActive, setSideNavActive] = useState(false);
	const [navActive, setNavActive] = useState(false);

	// useEffect(() => {
	// 	const nav = () => {
	// 		if (window.innerWidth <= 1000) {
	// 			setNavActive(true);
	// 		} else {
	// 			setNavActive(false);
	// 		}
	// 	};

	// 	window.addEventListener("resize", nav);

	// 	return () => {
	// 		window.removeEventListener("resize", nav);
	// 	};
	// }, []);

	const handleSideNav = () => {
		setSideNavActive(!sideNavActive);
	};

	return (
		<AppContainer>
			<Route exact path="/">
				<Signin setIsAuhthenticated={setIsAuhthenticated} />
			</Route>
			{isAuhtenticated ? (
				<>
					<img
						src="https://www.nicepng.com/png/full/1-19945_bubbles-png.png"
						alt="bg-img"
						className="bg-img"
					/>
					<GlobalStyle />
					<AnimatePresence>
						{!navActive && sideNavActive && (
							<SideNavigation setLocation={setLocation} />
						)}
					</AnimatePresence>
					<Container>
						<TopNavbar
							handleSideNav={handleSideNav}
							CurrentLocation={location}
						/>
						<Switch>
							<Route exact path="/team">
								<Team setLocation={setLocation} />
							</Route>
							<Route exact path="/survey">
								<Survey />
							</Route>
						</Switch>
					</Container>
					{sideNavActive && (
						<div onClick={handleSideNav} className="drop-shadow"></div>
					)}
				</>
			) : (
				""
			)}
		</AppContainer>
	);
}

const AppContainer = styled.div`
	display: flex;

	.bg-img {
		min-height: 100vh;
		max-height: 100vh;
		min-width: 100vw;
		max-width: 100vw;
		object-fit: cover;
		position: fixed;
		z-index: -100;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		opacity: 0.05;
	}

	.drop-shadow {
		position: fixed;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		min-height: 100vh;
		min-width: 100vw;
		background-color: rgba(0, 0, 0, 0.4);
		z-index: 88;
	}
`;

const Container = styled.div`
	flex-grow: 1;
`;

export default App;
