require('dotenv').config()
const express = require("express");
const https = require("https");
const cors = require('cors')
const fs = require("fs");
const indexRoutes = require('./routes/index')
const cookieParser = require('cookie-parser')
const app = express();
const path = require('path');
app.use(cookieParser())
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'build')));

app.use('/', indexRoutes)
app.get('/*', (req, res)=>{
  res.sendFile(path.join(__dirname, 'build') + '/index.html')
})

if(process.env.DEVMODE) {
  
  app.listen(4444);
} else {

  const httpsServer = https.createServer(
    { key: fs.readFileSync("/etc/letsencrypt/live/living-memory.xyz/privkey.pem"), cert: fs.readFileSync("/etc/letsencrypt/live/living-memory.xyz/cert.pem") },
    app
  );
  httpsServer.listen(8443);
}