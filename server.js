const express = require("express");
const https = require("https");
const cors = require('cors')
const fs = require("fs");
const indexRoutes = require('./routes/index')
const app = express();
const path = require('path');
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));
app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'build') + '/index.html')
})
app.use('/', indexRoutes)
app.listen(4444)
// app.listen(3000);
const httpsServer = https.createServer(
  { key: fs.readFileSync("key.pem"), cert: fs.readFileSync("cert.pem") },
  app
);
httpsServer.listen(8443);