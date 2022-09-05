const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const getPosts = async (req, res) => {  
  if (req.params.id) {
    return res.json(
      await prisma.post.findFirst({ where: { facebook_id: req.params.id } })
    );
  }
  return res.json(await prisma.post.findMany({}));
};

const createPost = async (req, res) => {
  const record = {
    facebook_id: req.params.id || req.body.facebook_id,
    userId: req.body.userId,
    type: req.body.type,
    text: req.body.text,
    video: req.body.video || "",
    image: req.body.image || "",
    likes: req.body.likes,
    comments: req.body.comments,
    posted_date: new Date(req.body.posted_date),
  };
  res.json(
    await prisma.Post.upsert({
      where: { facebook_id: record.facebook_id },
      create: record,
      update: record,
    })
  );
};

const updatePost = async (req, res) => {};

const deletePost = async (req, res) => {
  res.json(await prisma.Post.delete({ where: { id: req.params.id } }));
};

module.exports = { getPosts, createPost, updatePost, deletePost };
