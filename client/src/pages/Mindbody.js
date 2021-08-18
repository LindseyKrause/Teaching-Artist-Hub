/** @format */

import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME_BASIC } from "../utils/queries";

import { makeStyles, createTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SocialDrawer from "../components/SocialDrawer"
const useStyles = makeStyles((theme) => ({
	Paper: {
		padding: theme.spacing(8),
	},
	iframe: {
		width: "100%",
		height: "380",
		frameBorder: "0",
		allowtransparency: "true",
	},
	Grid: {
		padding: "50px",
		direction: "row",
		justifyContent: "space-around",
		alignItems: "flex-start",
		margin: theme.spacing(10),
	},
}));

const Mindbody = () => {
	const classes = useStyles();
	const { data: userData } = useQuery(QUERY_ME_BASIC);
	const loggedIn = Auth.loggedIn();
	console.log(userData);
	return (
		<main>
			<div className={classes.root}>
				
						<Paper className={classes.paper}>
							Class Schedule
							<healcode-widget
								data-type="schedules"
								data-widget-partner="object"
								data-widget-id="ea1646006627"
								data-widget-version="1"
							></healcode-widget>
							</Paper>
			</div>
		</main>
	);
};

export default Mindbody;
