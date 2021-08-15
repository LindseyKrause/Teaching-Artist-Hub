/** @format */
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { useDarkMode } from "./components/useDarkMode";
import { GlobalStyles } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Themes";
import Toggle from "./components/Toggler"

import Header from './components/Header';
import Footer from './components/Footer';
// import MenuBar from './components/MenuBar/MenuBar'

import Home from "./pages/Home";
import Login from "./pages/Login";
import NoMatch from "./pages/NoMatch";
import SingleThought from "./pages/SingleThought";
import Profile from "./pages/Profile";
import Signup from "./pages/Signup";
import Calendar from "./pages/Calendar";
import Mindbody from "./pages/Mindbody";

const client = new ApolloClient({
	request: (operation) => {
		const token = localStorage.getItem("id_token");

		operation.setContext({
			headers: {
				authorization: token ? `Bearer ${token}` : "",
			},
		});
	},
	uri: "/graphql",
});

function App() {
	const [theme, themeToggler, mountedComponent] = useDarkMode();
	const themeMode = theme === "light" ? lightTheme : darkTheme;
	if (!mountedComponent) return <div />
	return (
		<ApolloProvider client={client}>
			<ThemeProvider theme={themeMode}>
				<>
					<GlobalStyles />
					<Router>

						<div className="flex-column justify-flex-start min-100-vh">
							<Header />

							<div className="container">
								<div>
									<Toggle theme={theme} toggleTheme={themeToggler} />
								</div>
								<Switch>
									<Route exact path="/" component={Mindbody} />
									<Route exact path="/login" component={Login} />
									<Route exact path="/signup" component={Signup} />
									<Route exact path="/profile/:username?" component={Profile} />
									<Route exact path="/thought/:id" component={SingleThought} />
									<Route exact path="/calendar" component={Calendar} />
									<Route exact path="/home" component={Home} />

									<Route component={NoMatch} />
								</Switch>
							</div>
							<Footer />
						</div>
					</Router>
				</>
			</ThemeProvider>
		</ApolloProvider>
	);
}

export default App;
