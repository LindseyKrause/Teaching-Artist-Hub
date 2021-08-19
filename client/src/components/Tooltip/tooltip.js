import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import HelpIcon from '@material-ui/icons/Help';

const useStyles = makeStyles((theme) => ({
    Iconbutton: {
        margin: theme.spacing(1),
    },
    customWidth: {
        maxWidth: 500,
    },
    noMaxWidth: {
        maxWidth: 'none',
    },
    div: {
        alignContent: "right",
    },
}));

const longText = `
If you don't see any classes displayed, the default date may not have classes scheduled.  Try clicking "Full Calendar" and choosing a date that you know there will be classes. 
`;

export default function MBTooltip() {
    const classes = useStyles();

    return (
        <div className={classes.div} >
            <Tooltip title={longText}>
                <IconButton variant="outlined" size="small" color="secondary" aria-label="Tooltip-Classes not Showing?" className={classes.Iconbutton}>Classes Not Showing
                    <HelpIcon></HelpIcon>
                </IconButton>
            </Tooltip>
        </div>
    );
}
