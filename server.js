const express = require("express");
const https = require("https");
const fs = require("fs");
const indexRoutes = require('./routes/index')
const app = express();

app.use('/', indexRoutes)
// app.listen(3000);
const httpsServer = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);
httpsServer.listen(8443);