import * as React from "react";
import { styled } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import Paper from "@mui/material/Paper";
import Fab from "@mui/material/Fab";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import ListSubheader from "@mui/material/ListSubheader";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import LogoImage from "../Footer/images/Footer-logo.png";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Link } from "react-router-dom";
import Email from "../Email/Email";
import EmailButton from "../EmailButton/EmailButton";
import "./Footer.css";

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#1A1A1A",
    },
  },
});

const Footer = () => {
  return (
    <React.Fragment>
      <ThemeProvider theme={darkTheme}>
        <AppBar
          position="static"
          bottom="0"
          color="primary"
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Box>
              <img
                src={LogoImage}
                alt="living-memory"
                className="living-memory-img"
              />
            </Box>
            {/* <Box sx={{ flexGrow: 1 }} /> */}
            <Box sx={{ flexGrow: 1 }}>
              <Typography>Tags</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography>Links</Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Typography>
                Created on August 2022 <br /> by Win-Team
              </Typography>
              <Box sx={{ mt: "15px" , mb:"80px" }}>
                <EmailButton />
                {/* <Link className="email" to="/email">
                  Send an Email
                </Link> */}
              </Box>
              <Box>
                <Link className="terms" to="/terms_of_use">
                  Terms of use {'>'}
                </Link>
              </Box>
            </Box>
            {/* <IconButton color="inherit"></IconButton>
            <IconButton color="inherit"></IconButton> */}
          </Toolbar>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default Footer;
