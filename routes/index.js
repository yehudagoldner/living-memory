const { PrismaClient, Prisma } = require("@prisma/client");
const express = require("express");
const { getQuery } = require("../services/getQuery");
const app = express.Router();
const { collectFacebookData, login } = require("../services/facebook/");
const prisma = new PrismaClient();
app.get("/get_facebook_data", login);
app.get("/save_facebook_data", collectFacebookData);

app.route("/posts").get(async (req, res)=> res.json(await prisma.post.findMany({})));
app.route("/pagesLiked").get(async (req, res)=> res.json(await prisma.pagesLiked.findMany({})))
app.route("/profileImages").get(async (req, res)=> res.json(await prisma.profileImages.findMany({})))
app.route("/user").get(async (req, res)=> res.json(await prisma.user.findFirst({})))
app.get("/", async (req, res) => {
  // res.send(user)
});

module.exports = app;
