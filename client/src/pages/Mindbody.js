/** @format */

import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME_BASIC } from "../utils/queries";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: "center",
        color: theme.palette.text.secondary,
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
                <Grid
                    container
                    spacing={3}
                    direction="row"
                    justifyContent="space-around"
                    alignItems="top"
                >
                    <Grid item xs={6}>
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
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>
                            Facebook
                            <div
                                class="fb-page"
                                data-href="https://www.facebook.com/PhoenixCenterForTheArts/"
                                data-tabs="timeline"
                                data-width="400px"
                                data-height="500px"
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
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Twitter
                           
                                <a class="twitter-timeline" data-width="500" data-height="400" data-theme="dark" href="https://twitter.com/PhxCenterArts?ref_src=twsrc%5Etfw">Tweets by PhxCenterArts</a>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Linked In</Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>TicTok</Paper>
                    </Grid>
                </Grid>
            </div>
        </main>
    );
};

export default Mindbody;
