const express = require("express");
const {get, create, del} = require('../controllers/generic')
const app = express.Router();


app.route("/:entity/:id?")
    .get(get)
    .post(create)
    .put(create)
    .delete(del)

module.exports=app