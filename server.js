const express = require("express");
const https = require("https");
const cors = require('cors')
const fs = require("fs");
const indexRoutes = require('./routes/index')
const app = express();
app.use(cors())
app.use('/', indexRoutes)
app.listen(4444)
// app.listen(3000);
const httpsServer = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);
httpsServer.listen(8443);