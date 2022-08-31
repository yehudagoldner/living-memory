const express = require("express");
const {getPosts, createPost, updatePost, deletePost} = require('../controllers/posts')
const app = express.Router();


app.route("/:id?")
    .get(getPosts)
    .post(createPost)
    .put(createPost)
    .delete(deletePost)

    module.exports=app