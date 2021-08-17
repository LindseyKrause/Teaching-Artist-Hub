import React, { useState } from "react";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";

//drawer elements used
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import Divider from "@material-ui/core/Divider";
import Link from '@material-ui/core/Link';
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

// icons used for nav drawer
import AccountCircle from "@material-ui/icons/AccountCircle";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Web from "@material-ui/icons/Web";
import Forum from "@material-ui/icons/Forum";
import Button from "@material-ui/core/Button";


export default function MainNavigation() {
  //react useState hook to save the current open/close state of the drawer, normally variables disappear after the function was executed
  const [open, setState] = useState(false);

  //function that is being called every time the drawer should open or close, the keys tab and shift are excluded so the user can focus between the elements with the keys
  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    //changes the function state according to the value of open
    setState(open);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="lg" disableGutters="true">
        <Toolbar>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer(true)}
            sx={{
              mr: 2,
              display: {
                xs: "block",
                sm: "none",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
          <Box
            component="div"
            sx={{
              display: {
                xs: "none",
                sm: "block",
              },
            }}
          >
           
          </Box>

          

          {/* The outside of the drawer */}
          <Drawer
            //from which side the drawer slides in
            anchor="left"
            //if open is true --> drawer is shown
            open={open}
            //function that is called when the drawer should close
            onClose={toggleDrawer(false)}
            //function that is called when the drawer should open
            onOpen={toggleDrawer(true)}
          >
            {/* The inside of the drawer */}
            <Box
              sx={{
                p: 2,
                height: 1,
                backgroundColor: "#e14eca",
              }}
            >
              {/* when clicking the icon it calls the function toggleDrawer and closes the drawer by setting the variable open to false */}
              <IconButton sx={{ mb: 2 }}>
                <CloseIcon onClick={toggleDrawer(false)} />
              </IconButton>

              <Divider sx={{ mb: 2 }} />

              <Box sx={{ mb: 2 }}>
                <ListItem button component={Link} href="/profile">
                  <ListItemIcon>
                    <AccountCircle sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Profile" />
                </ListItem>

                <ListItem button component={Link} href="/calendar">
                  <ListItemIcon>
                    <CalendarToday sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Calendar" />
                </ListItem>
                
                <ListItem button component={Link} href="/home">
                  <ListItemIcon>
                    <Forum sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Forums & Announcements" />
                </ListItem>

                <ListItem button component={Link} href="/forms">
                  <ListItemIcon>
                    <Web sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Forms" />
                </ListItem>
              </Box>

           

             
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
