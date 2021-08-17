import React, { useState } from "react";
import { styled, alpha } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
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

import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import AccountCircle from "@material-ui/icons/AccountCircle";
import MeetingRoom from "@material-ui/icons/MeetingRoom";
import CalendarToday from "@material-ui/icons/CalendarToday";
import Web from "@material-ui/icons/Web";
import Forum from "@material-ui/icons/Forum";
import Button from "@material-ui/core/Button";

const StyledSearch = styled("div")(({ theme }) => ({
  position: "left",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.primary.main, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.primary.main, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "absolute",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

//search as JSX
const search = (
  <StyledSearch>
    <SearchIconWrapper>
      {" "}
      <SearchIcon />{" "}
    </SearchIconWrapper>
    <StyledInputBase
      placeholder="Type Search Here"
      inputProps={{ "aria-label": "search" }}
    />
  </StyledSearch>
);

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
          {/* coded this out as we are using Teaching Artist Hub from elsewhere so the 
          menu doesn't need to repeat it.   */}
          {/* <Typography variant="h6" sx={{ flexGrow: 1, fontWeight: 700 }}>
           Teaching Artist Hub
          </Typography> */}

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
            {search}
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

                <ListItem button>
                  <ListItemIcon>
                    <MeetingRoom sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>

                <ListItem button>
                  <ListItemIcon>
                    <CalendarToday sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Calendar" />
                </ListItem>
                
                <ListItem button>
                  <ListItemIcon>
                    <Forum sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Forums & Announcements" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Web sx={{ color: "primary.main" }} />
                  </ListItemIcon>
                  <ListItemText primary="Forms" />
                </ListItem>
              </Box>

              {search}

              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  position: "absolute",
                  bottom: "0",
                  left: "50%",
                  transform: "translate(-50%, 0)",
                }}
              >
                <Button variant="contained" sx={{ m: 1, width: 0.5 }}>
                  Register
                </Button>
                <Button variant="outlined" sx={{ m: 1, width: 0.5 }}>
                  Login
                </Button>
              </Box>
            </Box>
          </Drawer>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
