/** @format */

import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME_BASIC } from "../utils/queries";

import { makeStyles, createTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
				<Grid container>
					<Grid item lg>
						<Grid item lg>
						<Paper className={classes.paper}>
							Class Schedule
							<healcode-widget
								data-type="schedules"
								data-widget-partner="object"
								data-widget-id="ea1646006627"
								data-widget-version="1"
							></healcode-widget>
							</Paper>
						</Grid>
					</Grid>
					<Grid item xs>
						<Grid item xs>
						<Paper className={classes.paper}>
							Facebook
							<div
								className="fb-page"
								data-href="https://www.facebook.com/PhoenixCenterForTheArts/"
								data-tabs="timeline"
								data-width="500px"
								data-height="600px"
								data-small-header="false"
								data-adapt-container-width="true"
								data-hide-cover="true"
								data-show-facepile="true"
							>
								<blockquote
									cite="https://www.facebook.com/PhoenixCenterForTheArts/"
									className="fb-xfbml-parse-ignore"
								>
									<a href="https://www.facebook.com/PhoenixCenterForTheArts/">
										Phoenix Center For The Arts
									</a>
								</blockquote>
							</div>
							</Paper>
						</Grid>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>
							Twitter
							<a
								className="twitter-timeline"
								data-width="500"
								data-height="600"
								data-theme="dark"
								href="https://twitter.com/PhxCenterArts?ref_src=twsrc%5Etfw"
							>
								Tweets by PhxCenterArts
							</a>
						</Paper>
					</Grid>
					<Grid item xs>
						<Paper className={classes.paper}>
							<iframe
								src="https://open.spotify.com/embed/playlist/0bzoCZebq8KKqYRtCs0abQ"
								allow="encrypted-media"
							></iframe>
						</Paper>
					</Grid>
				</Grid>
			</div>
		</main>
	);
};

export default Mindbody;
