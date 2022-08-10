// import { google } from "googleapis";
const { google } = require("googleapis");
const readline = require("readline");

const CLIENT_ID =
  "112793579941-rci015lvkrjt7g0s6dihtvmkeupqe0ko.apps.googleusercontent.com";
const CLIENT_SECRET = "p6UnCblW3l10MOtvcKpzroub";
const REDIRECT_URI = "https://developers.google.com/oauthplayground";
const REFRESH_TOKEN =
  "1//04eTmUdp-xkkjCgYIARAAGAQSNwF-L9IrLzYw-15vHC3QP2BIpRYsvmn6vKPMKteiaucFAa6NEfvt-5jwbiGYIbS65Q5NwDknAAs";
const SCOPES = ["https://www.googleapis.com/auth/contacts.readonly"];

const oAuth2Client = new google.auth.OAuth2(
  CLIENT_ID,
  CLIENT_SECRET,
  REDIRECT_URI
);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: "offline",
    scope: SCOPES,
  });
  console.log("Authorize this app by visiting this url:", authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });
  rl.question("Enter the code from that page here: ", (code) => {
    rl.close();
    oAuth2Client.getToken(code, (err, token) => {
      if (err) return console.error("Error retrieving access token", err);
      oAuth2Client.setCredentials(token);
      // Store the token to disk for later program executions
      fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if (err) return console.error(err);
        console.log("Token stored to", TOKEN_PATH);
      });
      callback(oAuth2Client);
    });
  });
}

getNewToken(oAuth2Client);

function listConnectionNames(auth) {
  const service = google.people({ version: "v1", auth });
  service.people.connections.list(
    {
      resourceName: "people/me",
      pageSize: 10,
      personFields: "names,emailAddresses",
    },
    (err, res) => {
      if (err) return console.error("The API returned an error: " + err);
      const connections = res.data.connections;
      if (connections) {
        console.log("Connections:");
        connections.forEach((person) => {
          if (person.names && person.names.length > 0) {
            console.log(person.names[0].displayName);
          } else {
            console.log("No display name found for connection.");
          }
        });
      } else {
        console.log("No connections found.");
      }
    }
  );
}

listConnectionNames(oAuth2Client);
