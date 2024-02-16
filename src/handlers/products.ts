import prisma from "../db";

export const getAllProducts = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
    include: {
      prouducts: true,
    },
  });
  res.json({
    data: user.prouducts,
    message: "kwame wo ni product biaa wo ha yi",
  });
  res.status(200);
};

export const addProduct = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: { id: req.user.id },
  });
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongsTo: user.id,
    },
  });
};
