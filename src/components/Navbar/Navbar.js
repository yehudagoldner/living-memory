// import * as React from "react";
// import { useState } from "react";
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import Menu from "@mui/material/Menu";
// import MenuIcon from "@mui/icons-material/Menu";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import Button from "@mui/material/Button";
// import Tooltip from "@mui/material/Tooltip";
// import MenuItem from "@mui/material/MenuItem";
// import AdbIcon from "@mui/icons-material/Adb";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import ShareIcon from "@mui/icons-material/Share";
// import ExtensionIcon from "@mui/icons-material/Extension";
// import PeopleIcon from "@mui/icons-material/People";
// // import { Stack } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// const settings = ["Profile", "Account", "Dashboard", "Logout"];

// const ResponsiveAppBar = () => {
//   const [anchorElNav, setAnchorElNav] = useState(null);
//   const [anchorElUser, setAnchorElUser] = useState(null);

//   const handleOpenNavMenu = (event) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };

//   const darkTheme = createTheme({
//     palette: {
//       mode: "dark",
//       primary: {
//         main: "#1A1A1A",
//       },
//     },
//     typography: {
//       button: {
//         textTransform: "none",
//       },
//       fontSize: 12,
//     },
//   });

//   return (
//     <ThemeProvider theme={darkTheme}>
//       <AppBar position="static" color="primary" enableColorOnDark>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters>
//             <Box
//               sx={{
//                 width: { xs: "180px", lg: "175px" },
//                 fontSize: { lg: "15px", xs: "8px" },
//                 ml: "83px",
//               }}
//             >
//               <Typography
//                 variant="h6"
//                 noWrap
//                 component="a"
//                 href="/"
//                 sx={{
//                   mb: "-8px",
//                   mr: 2,
//                   display: { xs: "flex", md: "flex" },
//                   fontFamily: "monospace",
//                   fontWeight: 700,
//                   color: "inherit",
//                   textDecoration: "none",
//                 }}
//               >
//                 Create a Memorial
//               </Typography>

//               <Typography
//                 sx={{ color: "#D9D9D9", display: { xs: "flex", md: "flex" } }}
//               >
//                 Facebook one click import
//               </Typography>

//             </Box>
//             <ArrowForwardIosIcon
//               fontSize="large"
//               sx={{
//                 display: { xs: "flex", md: "flex" },
//                 ml: "-18px",
//                 fontSize: "36px",
//               }}
//             />

//             <Box
//               sx={{
//                 display: "flex",
//                 justifyContent: "center",
//                 flexGrow: 1,
//                 display: { xs: "flex", md: "flex" },
//               }}
//             >
//               <Button
//                 key={"value"}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "flex" }}
//               >
//                 <PeopleIcon sx={{ mr: 1 }} />
//                 Invite friends
//               </Button>
//               <Button
//                 key={"value"}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "flex" }}
//               >
//                 <ExtensionIcon sx={{ mr: 1 }} />
//                 Contributes
//               </Button>
//               <Button
//                 key={"value"}
//                 onClick={handleCloseNavMenu}
//                 sx={{ my: 2, color: "white", display: "flex" }}
//               >
//                 <ShareIcon sx={{ mr: 1 }} />
//                 Share
//               </Button>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar>
//     </ThemeProvider>
//   );
// };
// export default ResponsiveAppBar;

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

import "./Navbar.css";

const drawerWidth = 240;

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

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

  const darkThemeSec = createTheme({
    palette: {
      primary: {
        main: "#F5F5DC",
      },
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", md: "block" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        <img src={LivingMemoryImage} alt="living-memory" />
      </Typography>
      <Divider />
      <List>
        <Link to={"/invite_friends"}>
          <ListItem key="invite-friends" disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
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
        <Box sx={{ display: "flex", Height: "50%" }}>
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
                <Button
                  key="logo"
                  sx={{ minHeight: 0, minWidth: 0, padding: 0 }}
                >
                  <img
                    src={LivingMemoryImage}
                    alt="living-memory"
                    className="living-memory-img"
                  />
                </Button>
              </Link>
              <Box>
                <Typography
                  variant="h6"
                  component="div"
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
                <Link to="/invite_friends">
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
                <Link to="/contribute">
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
                <Link to="/share">
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

      <ThemeProvider theme={darkThemeSec}>
        <Box sx={{ mt: "-34px", flexGrow: 1 }}>
          <AppBar position="static">
            <StyledToolbar>
              <Box sx={{ ml: "80px" }}>
                <Typography
                  variant="h4"
                  fontWeight="bold"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    alignSelf: "flex-end",
                    mt: "20px",
                    mb: "10px",
                  }}
                >
                  Nicholas Drake 1948-1974
                </Typography>
                <Typography
                  variant="h6"
                  noWrap
                  component="div"
                  sx={{
                    flexGrow: 1,
                    alignSelf: "flex-end",
                    lineHeight: "130%",
                    fontSize: "17px",
                  }}
                >
                  Gone yet not forgotten, although we are apart, your <br />
                  memory lives within us, forever in our hearts.
                </Typography>
              </Box>
              {/* <IconButton size="small" aria-label="search" color="inherit"> */}
              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: { xs: "none", lg: "flex" },
                  flexWrap: "wrap",
                }}
              >
                <List sx={{ display: "flex", mt: "29px" }}>
                  <ListItem
                    key="timeline"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/timeline">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <ViewTimelineSharpIcon />
                        <Typography sx={{ display: "flex" }}>
                          Timeline
                        </Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem
                    key="book-view"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/book_view">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <MenuBookSharpIcon />
                        <Typography>BookView</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem
                    key="photos"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/photos">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <PortraitSharpIcon /> <Typography>Photos</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem
                    key="videos"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/videos">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <SlideshowSharpIcon /> <Typography>Vidoes</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem
                    key="candles"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/candles">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <img
                          src={CandleImage}
                          alt="candle-image"
                          className="candle-image"
                        />{" "}
                        <Typography>Candles</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem
                    key="text"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/text">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <EditSharpIcon /> <Typography>Text</Typography>
                      </ListItemButton>
                    </Link>
                  </ListItem>

                  <ListItem
                    key="likes"
                    disablePadding
                    sx={{ mr: "15px", minWidth: "15px" }}
                  >
                    <Link to="/likes">
                      <ListItemButton
                        sx={{
                          textAlign: "center",
                          flexDirection: "column",
                          backgroundColor: "#87CEEB",
                          "&:hover": {
                            backgroundColor: "#B6D0E2",
                          },
                        }}
                      >
                        <ThumbUpSharpIcon /> Likes
                      </ListItemButton>
                    </Link>
                  </ListItem>
                </List>
              </Box>
              {/* </IconButton> */}
              <IconButton
                size="large"
                aria-label="display more actions"
                edge="end"
                color="inherit"
              ></IconButton>
            </StyledToolbar>
          </AppBar>
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
