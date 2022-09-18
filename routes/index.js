const { PrismaClient } = require("@prisma/client");
const express = require("express");
const postsRoutes = require("./posts")
const genericRoute = require("./generic")
const md5 = require('js-md5');

const { getQuery } = require("../services/getQuery");
const app = express.Router();
const { collectFacebookData, login } = require("../services/facebook/");
const prisma = new PrismaClient();
app.get("/get_facebook_data", login);
app.get("/save_facebook_data", collectFacebookData);
app.use('/posts', postsRoutes)


// app.use('/api', genericRoute)

app.route("/api/pagesLiked").get(async (req, res)=> res.json(await prisma.pagesLiked.findMany({})))
app.route("/api/profileImages").get(async (req, res)=> res.json(await prisma.profileImages.findMany({})))
app.route("/api/creator").get(async (req, res)=> res.json(await prisma.creator.findFirst({where:{email:req.query.email, password:req.query.password}})))
app.get("/api/:userId/all", async (req, res) => {  
  const user = await prisma.user.findFirst({ where: { facebook_id: req.params.userId } })
  res.json( {
   posts: await prisma.post.findMany({ where: { userId: user.id } }),
   pagesLiked: await prisma.pagesLiked.findMany({ where: { userId: user.id } }),
   profileImages: await prisma.profileImages.findMany({ where: { userId: user.id,} }),   
  })
});
app.use('/api/:userId', genericRoute)
app.get("/all", async (req, res) => {
  res.json( {
   posts: await prisma.post.findMany({}),
   pagesLiked: await prisma.pagesLiked.findMany({}),
   profileImages: await prisma.profileImages.findMany({}),
   user: await prisma.user.findFirst({}),
  })
});

module.exports = app;
