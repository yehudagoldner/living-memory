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
      await prisma.user.findFirst({ where: { facebook_id: req.params.userId } }).id;

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
    const user = await prisma.user.findFirst({ where: { facebook_id: req.body.userId } });
     console.log('user=>',user.id);
    
    console.log(req.body);
    let record = {
      ...req.body,      
      userId:user.id,      
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
