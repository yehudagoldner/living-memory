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
import "./Header.css";

const darkThemeSec = createTheme({
  palette: {
    primary: {
      main: "#F5F5DC",
    },
  },
});

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: "flex-start",
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  "@media all": {
    minHeight: 128,
  },
}));

const Header = () => {
  return (
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
                <Link className="decor" to="/timeline">
                  <ListItem
                    key="timeline"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87CEEB",
                      p: "10px 15.49px",
                      "&:hover": {
                        backgroundColor: "#B6D0E2",
                      },
                    }}
                  >
                    <ViewTimelineSharpIcon />
                    <Typography>Timeline</Typography>
                  </ListItem>
                </Link>

                <Link className="decor" to="/book_view">
                  <ListItem
                    key="book-view"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87C6CB",
                      minWidth: "18%",
                      p: "10px 10px",
                      "&:hover": {
                        backgroundColor: "#B6D0E2",
                      },
                    }}
                  >
                    <MenuBookSharpIcon />
                    <Typography>BookView</Typography>
                  </ListItem>
                </Link>

                <Link className="decor" to="/photos">
                  <ListItem
                    key="photos"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87CEEB",
                      p: "10px 20.68px",
                      "&:hover": {
                        backgroundColor: "#B6D0E2",
                      },
                    }}
                  >
                    <PortraitSharpIcon /> <Typography>Photos</Typography>
                  </ListItem>
                </Link>

                <Link className="decor" to="/videos">
                  <ListItem
                    key="videos"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87CEEB",
                      p: "10px 21.26px",
                      "&:hover": {
                        backgroundColor: "#B6D0E2",
                      },
                    }}
                  >
                    <SlideshowSharpIcon /> <Typography>Vidoes</Typography>
                  </ListItem>
                </Link>

                <Link className="decor" to="/candles">
                  <ListItem
                    key="candles"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87CEEB",
                      p: "10px 16.15px",
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
                  </ListItem>
                </Link>

                <Link className="decor" to="/text">
                  <ListItem
                    key="text"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87CEEB",
                      p: "10px 31.05px",
                      "&:hover": {
                        backgroundColor: "#B6D0E2",
                      },
                    }}
                  >
                    <EditSharpIcon /> <Typography>Text</Typography>
                  </ListItem>
                </Link>

                <Link className="decor" to="/likes">
                  <ListItem
                    key="likes"
                    disablePadding
                    sx={{
                      textAlign: "center",
                      flexDirection: "column",
                      backgroundColor: "#87CEEB",
                      p: "10px 26.98px",
                      "&:hover": {
                        backgroundColor: "#B6D0E2",
                      },
                    }}
                  >
                    <ThumbUpSharpIcon /> <Typography>Likes</Typography>
                  </ListItem>
                </Link>
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
  );
};

export default Header;
