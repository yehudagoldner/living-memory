const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const get = async (req, res) => {
  try {
    if (req.params.id) {
      return res.json(
        await prisma[req.params.entity].findFirst({
          where: { id: req.params.id * 1 },
        })
      );
    }

    console.log(req.params.userId);

    const userId =
      req.params.entity.toLowerCase() === "candles"
        ? req.params.userId
        : await prisma.user.findMany({ where: { id: req.params.userId } })
            .facebook_id;

    return res.json(
      await prisma[req.params.entity].findMany({
        where: { userId },
      })
    );
  } catch (e) {
    return res.json(e);
  }
};

const create = async (req, res) => {
  try {
    console.log(req.body);
    let record = {
      ...req.body,
    };

    console.log(record);
    res.json(
      await prisma[req.params.entity].upsert({
        where: { id: req.params.id ? req.params.id * 1 : -1 },
        create: record,
        update: record,
      })
    );
  } catch (e) {
    return res.json(e);
  }
};

const updatePost = async (req, res) => {};

const del = async (req, res) => {
  try {
    res.json(
      await prisma[req.params.entity].delete({
        where: { id: req.params.id * 1 },
      })
    );
  } catch (e) {
    return res.json(e);
  }
};

module.exports = { get, create, del };
