const { PrismaClient } = require("@prisma/client");
const express = require("express");
const postsRoutes = require("./posts")
const genericRoute = require("./generic")
const { getQuery } = require("../services/getQuery");
const app = express.Router();
const { collectFacebookData, login } = require("../services/facebook/");
const prisma = new PrismaClient();
app.get("/get_facebook_data", login);
app.get("/save_facebook_data", collectFacebookData);
app.use('/posts', postsRoutes)


app.use('/api', genericRoute)
app.use('/:userId/api', genericRoute)
app.route("/pagesLiked").get(async (req, res)=> res.json(await prisma.pagesLiked.findMany({})))
app.route("/profileImages").get(async (req, res)=> res.json(await prisma.profileImages.findMany({})))
app.route("/user").get(async (req, res)=> res.json(await prisma.user.findFirst({})))
app.get("/:userId/all", async (req, res) => {
  const user = await prisma.user.findFirst({ where: { id: req.params.userId } })
  res.json( {
   posts: await prisma.post.findMany({ where: { userId: user.facebook_id } }),
   pagesLiked: await prisma.pagesLiked.findMany({ where: { userId: user.facebook_id } }),
   profileImages: await prisma.profileImages.findMany({ where: { userId: user.facebook_id } }),
   user: await prisma.user.findFirst({}),
  })
});
app.get("/all", async (req, res) => {
  res.json( {
   posts: await prisma.post.findMany({}),
   pagesLiked: await prisma.pagesLiked.findMany({}),
   profileImages: await prisma.profileImages.findMany({}),
   user: await prisma.user.findFirst({}),
  })
});

module.exports = app;
