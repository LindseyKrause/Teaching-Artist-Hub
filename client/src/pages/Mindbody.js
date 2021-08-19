/** @format */

import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import MBTooltip from "../components/Tooltip/tooltip";

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
	return (
		<main>
			<div className={classes.root}>
						<Paper className={classes.paper}>
					Class Schedule
					<MBTooltip></MBTooltip>
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
