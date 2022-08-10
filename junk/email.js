const nodemailer = require("nodemailer");
const { google } = require("googleapis");

// These id's and secrets should come from .env file.

const CLIENT_ID =
  "834951207911-k32ng07l73k2kbq2h5jfvsb6lv6f9l2b.apps.googleusercontent.com";
const CLIENT_SECRET = "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";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04-isx9IkqOh6CgYIARAAGAQSNgF-L9IrPbsDNhMCApmxQPMUds5wbQ7olRA-qkdlM7i9vKu4D68UDyuekaNDu7gbnffqBiOY1Q";
const SCOPES = ["https://www.googleapis.com/auth/contacts.readonly"];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

async function sendMail() {
  try {
    const accessToken = await oAuth2Client.getAccessToken();

    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "yours authorised email address",
        clientId: CLIENT_ID,
        clientSecret: CLIENT_SECRET,
        refreshToken: REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "KETER <keterav@gmail.com>",
      to: "keterav@gmail.com",
      subject: "Hello from gmail using API",
      text: "Hello from gmail email using API",
      html: "<h1>Hello from gmail email using API</h1>",
    };

    const result = await transport.sendMail(mailOptions);
    return result;
  } catch (error) {
    return error;
  }
}

sendMail()
  .then((result) => console.log("Email sent...", result))
  .catch((error) => console.log(error.message));
