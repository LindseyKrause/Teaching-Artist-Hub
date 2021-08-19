/** @format */

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
// import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FacebookInfo from "../Facebook";
// import TwitterInfo from "../Twitter";
import SpotifyInfo from "../Spotify";
// import Button from '@material-ui/core/Button'; **TO DO (further development)

const useStyles = makeStyles({
	root: {
		minWidth: 225,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});

export default function SimpleCard() {
	const classes = useStyles();

	return (
		<div>
			<Card className={classes.root}>
				<CardContent>
					<SpotifyInfo></SpotifyInfo>
				</CardContent>
				{/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
			</Card>
			<Card className={classes.root}>
				<CardContent>
					<FacebookInfo></FacebookInfo>
				</CardContent>
				{/* <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions> */}
			</Card>
			{/* <Card className={classes.root}>
				<CardContent>
					<TwitterInfo></TwitterInfo>
				</CardContent>
				<CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
			</Card> */}
		</div>
	);
}
