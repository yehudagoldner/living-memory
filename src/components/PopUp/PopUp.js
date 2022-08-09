import React, { useState } from "react";
import Button from "@mui/material/Button";
import { Box, Stack } from "@mui/material";
import Dialog from "@mui/material/Dialog";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import IconButton from "@mui/material/IconButton";

// import DialogContent from "@mui/material/DialogContent";
import "./PopUp.css";

export default function PopUp() {
  const [open, setOpen] = useState(false);
  const [like, setLike] = useState(0);
  const [likeActive, setLikeActive] = useState(false);

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
        <Box className="main_container">
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



            <Box sx={{display: "flex",}}>
              <Typography className="like_icon">{like}</Typography>

              <IconButton
                onClick={likefunc}
                className={[likeActive ? "active-like" : null]}
                aria-label="thumbup"
                sx={{ color: "white", mr: "10px" }}
              >
                <ThumbUpSharpIcon
                  className={[likeActive ? "active-like" : null].join(" ")}
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
            <Typography sx={{ mt: "20px", ml: "15px" }} className="tags">
              TAGS:{" "}
            </Typography>
          </Box>
        </Box>
      </Dialog>
    </div>
  );
}
