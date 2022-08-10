import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import ShareIcon from "@mui/icons-material/Share";
import ExtensionIcon from "@mui/icons-material/Extension";
import AddIcon from "@mui/icons-material/Add";
import List from "@mui/material/List";

// import DialogContent from "@mui/material/DialogContent";
import "./PopUp.css";

export default function PopUp(props) {
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);
  console.log(props);
  const likefunc = () => {
    if (likeActive) {
      setLikeActive(false);
      setLike(like - 1);
    } else {
      setLikeActive(true);
      setLike(like + 1);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="lg">
        <Box sx={{ backgroundColor: "#F5F5DC" }} className="main_container">
          <Box className="first_container">
            {/* <DialogContent> */}
            <img
              className="image"
              src="https://parade.com/.image/c_limit%2Ccs_srgb%2Cq_auto:good%2Cw_808/MTkwNTgwOTUyNjU2Mzg5MjQ1/albert-einstein-quotes-jpg.webp"
              alt="parade.com"
            />
            {/* </DialogContent> */}
          </Box>
          <Box
            className="box"
            sx={{
              display: "flex",
              mt: "-4px",
              pt: "5px",
              pb: "5px",
              width: { lg: "100%", xs: "100%" },
              backgroundColor: "#87C6CB",
            }}
          >
            <Typography sx={{ ml: "15px" }} className="date">
              date
            </Typography>

            <Box sx={{ display: "flex" }}>
              <Typography className="like_icon">{like}</Typography>

              <IconButton
                onClick={likefunc}
                disablePadding
                aria-label="thumbup"
                sx={{
                  display: "inline-block",
                  padding: "0px",
                  color: "white",
                  mr: "10px",
                }}
              >
                <ThumbUpSharpIcon
                  className={[likeActive ? "active-like" : null]}
                  sx={{ ml: "8px" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box
            className="box"
            sx={{
              display: "flex",
              flexDirection: "column",
              mr: "15px",
              width: { lg: "100%", xs: "100%" },
              backgroundColor: "#F5F5DC",
            }}
          >
            <Typography sx={{ mt: "10px", ml: "15px" }} className="tags">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipis Lorem ipsum dolor
              sit amet, consectetur adipisLorem ipsum dolor sit amet,
              consectetur adipisLorem ipsum dolor sit amet, consectetur
              adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum
              dolor sit amet, consectetur adipisLorem ipsum dolor sit amet,
              consectetur adipisLorem ipsum dolor sit amet, consectetur
              adipisLorem ipsum dolor sit amet, consectetur adipisLorem ipsum
              dolor sit amet, consectetur adipisLorem ipsum dolor sit amet,
              consectetur adipisLorem ipsum dolor sit amet, consectetur
              adipisLorem ipsum dolor sit amet, consectetur adipis
            </Typography>

            <Box sx={{ display: "flex", mt: "20px" }}>
              <Typography sx={{ ml: "15px" }} className="tags">
                TAGS:{" "}
              </Typography>

              <Box
                sx={{
                  flexGrow: 1,
                  justifyContent: "center",
                  display: { xs: "none", lg: "flex" },
                  ml: "700px",
                }}
              >
                <Link to="/invite_friends" className="text">
                  <Button
                    key="invite-friends"
                    sx={{
                      display: "flex",
                      color: "#000",
                      textTransform: "none",
                    }}
                  >
                    <PeopleIcon sx={{ color: "#fb4f14", mr: 1 }} />{" "}
                    <Typography
                      className="text"
                      sx={{ color: "#fb4f14", mr: 1 }}
                    >
                      Invite friends
                    </Typography>
                  </Button>
                </Link>
                <Link to="/add_photo" className="text">
                  <Button
                    key="contributes"
                    sx={{
                      display: "flex",
                      color: "#fb4f14",
                      textTransform: "none",
                    }}
                  >
                    <AddIcon sx={{ color: "#fb4f14", mr: 0.5 }} />{" "}
                    <Typography className="text" sx={{ mr: 1 }}>
                      Add a photo
                    </Typography>
                  </Button>
                </Link>
                <Link to="/share" className="text">
                  <Button
                    key="share"
                    sx={{
                      display: "flex",
                      color: "#000",
                      textTransform: "none",
                    }}
                  >
                    <ShareIcon sx={{ color: "#fb4f14", mr: 0.5 }} />{" "}
                    <Typography
                      className="text"
                      sx={{ color: "#fb4f14", mr: 1 }}
                    >
                      Share
                    </Typography>
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
