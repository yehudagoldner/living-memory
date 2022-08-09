import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Button from "@mui/material/Button";
import "./Email.css";

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "email_template", form.current, "tk03F-uhIcuzSSR2w")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
    console.log(form.current);
  };

  return (
    <>
      
      <form ref={form} onSubmit={sendEmail}>
        <Box
          alignItems="center"
          justifyContent="center"
          display="flex"
          flexDirection="column"
          sx={{ mb: "50px", mt: "50px" }}
        >
          <Box
            alignItems="center"
            justifyContent="center"
            display="flex"
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "15px",
            }}
          >
            <TextField
              type="text"
              fullWidth
              label="Name"
              name="name"
              id="fullWidth"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "15px",
            }}
          >
            <TextField
              name="email"
              fullWidth
              label="Email Address"
              id="fullWidth"
            />
          </Box>
          <Box
            sx={{
              width: 500,
              maxWidth: "100%",
              mb: "15px",
            }}
          >
            <TextField
              name="subject"
              type="text"
              fullWidth
              label="Subject"
              id="fullWidth"
            />
          </Box>

          <TextareaAutosize
            name="message"
            aria-label="minimum height"
            minRows={20}
            placeholder="Your message"
            style={{ width: 495 }}
          />
          <Button
            sx={{ textTransform: "none", mt: "15px" }}
            variant="contained"
            type="submit"
          >
            Send Message
          </Button>
        </Box>
      </form>
    </>
  );
};

export default ContactUs;
