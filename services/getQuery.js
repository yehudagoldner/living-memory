const { PrismaClient, Prisma } = require("@prisma/client");
const prisma = new PrismaClient();

const getQuery = async (req, res, query) => {
  res.json(await query);
};

module.exports = { getQuery };
