import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShareIcon from "@mui/icons-material/Share";
import ExtensionIcon from "@mui/icons-material/Extension";
import PeopleIcon from "@mui/icons-material/People";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import LivingMemoryImage from "../Navbar/images/living-memory.png";
import ArrowImage from "../Navbar/images/arrow.png";
import CandleImage from "../Navbar/images/candle.png";
import WhiteCandleImage from "../Navbar/images/candle-white.png";
import ViewTimelineSharpIcon from "@mui/icons-material/ViewTimelineSharp";
import MenuBookSharpIcon from "@mui/icons-material/MenuBookSharp";
import PortraitSharpIcon from "@mui/icons-material/PortraitSharp";
import SlideshowSharpIcon from "@mui/icons-material/SlideshowSharp";
import EditSharpIcon from "@mui/icons-material/EditSharp";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import { Link } from "react-router-dom";
import { styled } from "@mui/material/styles";
import LoginP from "./Login";

import "./Navbar.css";
import LoginForm from "./LoginForm";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isShown, setIsShown] = useState(false);
  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const adminUser = {
    email: "admin@admin.com",
    password: "admin123",
  };

  const Login = (details) => {
    console.log(details);
    if (
      details.email === adminUser.email &&
      details.password === adminUser.password
    ) {
      console.log("Logged in");
      setUser({ name: details.name, email: details.email });
    } else {
      console.log("Details do not match");
      setError("Details do not match");
    }
  };

  const LogOut = () => {
    setUser({ name: "", email: "" });
  };

  const loginHandleClick = (event) => {
    setIsShown((current) => !current);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#1A1A1A",
      },
    },
  });

  // const darkThemeSec = createTheme({
  //   palette: {
  //     primary: {
  //       main: "#F5F5DC",
  //     },
  //   },
  // });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", md: "block" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={LivingMemoryImage} alt="living-memory" />
      </Typography>
      <Divider />
      <List>
        <Link to={"/invite_friends"}>
          <ListItem
            sx={{ textTransform: "none" }}
            key="invite-friends"
            disablePadding
          >
            <ListItemButton sx={{ textAlign: "center", textTransform: "none" }}>
              <PeopleIcon sx={{ mr: 1 }} /> Invite friends
            </ListItemButton>
          </ListItem>
        </Link>

        <Link to={"/contribute"}>
          <ListItem key="contribute" disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ExtensionIcon sx={{ mr: 1 }} /> Contribute
            </ListItemButton>
          </ListItem>
        </Link>

        <Link sx={{ color: "error" }} to={"/share"}>
          <ListItem key="share" disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <ShareIcon sx={{ mr: 1 }} /> Share
            </ListItemButton>
          </ListItem>
        </Link>
      </List>

      <Divider sx={{ mt: "15px" }} />
      <ListItemText>
        Nicholas Drake <br /> 1948-1974
      </ListItemText>

      <Divider />

      <List>
        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ViewTimelineSharpIcon sx={{ mr: 1 }} /> Timeline
          </ListItemButton>
        </ListItem>

        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <MenuBookSharpIcon sx={{ mr: 1 }} /> Book view
          </ListItemButton>
        </ListItem>

        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <PortraitSharpIcon sx={{ mr: 1 }} /> Photos
          </ListItemButton>
        </ListItem>

        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <SlideshowSharpIcon sx={{ mr: 1 }} /> Videos
          </ListItemButton>
        </ListItem>

        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <img
              src={WhiteCandleImage}
              alt="candle-image"
              className="candle-image-drawer"
            />{" "}
            Candles
          </ListItemButton>
        </ListItem>

        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <EditSharpIcon sx={{ mr: 1 }} /> Text
          </ListItemButton>
        </ListItem>

        <ListItem key="share" disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            <ThumbUpSharpIcon sx={{ mr: 1 }} /> Likes
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
    // Override media queries injected by theme.mixins.toolbar
    "@media all": {
      minHeight: 128,
    },
  }));

  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <Box sx={{ display: "flex" }}>
          <AppBar component="nav">
            <Toolbar>
              <IconButton
                display="inline"
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
              <Link to="/">
                {/* <Button
                  key="logo"
                  sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                > */}
                <img
                  src={LivingMemoryImage}
                  alt="living-memory"
                  className="living-memory-img"
                />
                {/* </Button> */}
              </Link>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
                  className="logo-text"
                  sx={{
                    flexGrow: 1,
                    mb: "-7px",
                    ml: "17px",
                  }}
                >
                  Create a Memorial
                </Typography>
                <Typography
                  variant="h6"
                  component="div"
                  sx={{
                    flexGrow: 1,
                    fontSize: "14px",
                    color: "#D9D9D9",
                    ml: "17px",
                  }}
                >
                  Facebook one click import
                </Typography>
              </Box>
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: { xs: "none", lg: "flex" },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Link to="/invite_friends" className="text">
                    <Button
                      key="invite-friends"
                      sx={{
                        display: "flex",
                        color: "#fff",
                        textTransform: "none",
                      }}
                    >
                      <PeopleIcon sx={{ mr: 1 }} /> Invite friends
                    </Button>
                  </Link>
                  <Link to="/contribute" className="text">
                    <Button
                      key="contributes"
                      sx={{
                        display: "flex",
                        color: "#fff",
                        textTransform: "none",
                      }}
                    >
                      <ExtensionIcon sx={{ mr: 1 }} /> Contribute
                    </Button>
                  </Link>
                  <Link to="/share" className="text">
                    <Button
                      key="share"
                      sx={{
                        display: "flex",
                        color: "#fff",
                        textTransform: "none",
                      }}
                    >
                      <ShareIcon sx={{ mr: 1 }} /> Share
                    </Button>
                  </Link>
                </Box>
                {user.email !== "" ? (
                  <Link
                    to="/"
                    className="loginbtn"
                    sx={{ color: "white" }}
                    onClick={LogOut}
                  >
                    Logout
                  </Link>
                ) : (
                  <Link
                    className="loginbtn"
                    sx={{ color: "white" }}
                    onClick={loginHandleClick}
                  >
                    Login
                  </Link>
                )}
                <Typography>
                  {isShown && (
                    <LoginP className="afterlogin" {...{ user, setUser }} />
                  )}
                </Typography>
              </Box>
            </Toolbar>
          </AppBar>
          <Box component="nav">
            <Drawer
              container={container}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
              sx={{
                display: { xs: "block", lg: "none" },
                "& .MuiDrawer-paper": {
                  boxSizing: "border-box",
                  width: drawerWidth,
                },
              }}
            >
              {drawer}
            </Drawer>
          </Box>
          <Box component="main" sx={{ p: 3 }}>
            <Toolbar />
          </Box>
        </Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

DrawerAppBar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DrawerAppBar;
