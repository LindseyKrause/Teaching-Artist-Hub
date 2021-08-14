/** @format */

import React from "react";
import Auth from "../utils/auth";
import { useQuery } from "@apollo/react-hooks";
import { QUERY_ME_BASIC } from "../utils/queries";

import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { FacebookProvider, Page } from 'react-facebook';

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
                    alignItems="space-evenly"
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
                        <Paper className={classes.paper}>Facebook
                            <FacebookProvider appId="113518392061132">
                                <Page href="https://www.facebook.com/PhoenixCenterForTheArts/" tabs="timeline" />
                            </FacebookProvider>
                        </Paper>
                    </Grid>
                    <Grid item xs={3}>
                        <Paper className={classes.paper}>Twitter</Paper>
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
