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
  // const user = await prisma.user.findUnique({
  //   where: { id: req.user.id },
  // });
  const product = await prisma.product.create({
    data: {
      name: req.body.name,
      belongToId: req.user.id,
    },
  });
  res.status(200);
  res.json({ data: product });
};

export const updateProduct = async (req, res) => {
  const update = await prisma.product.update({
    where: {
      id: req.params.id,
    },
    data: {
      name: req.body.name,
    },
  });
  res.json({ data: update, message: "Product updated " });
  res.status(200);
};

export const deleteProduct = async (req, res) => {
  await prisma.product.delete({
    where: {
      id: req.params.id,
    },
  });
  res.json({ message: "Product deleted " });
  res.status(200);
};
