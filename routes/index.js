const express = require('express');
const app = express.Router()
const { collectFacebookData, login } = require('../sevices/collectFacebookData')
app.get('/get_facebook_data', login);
app.get('/save_facebook_data', collectFacebookData);

module.exports = app