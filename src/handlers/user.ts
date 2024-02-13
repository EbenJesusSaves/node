import prisma from "../db";
import { comparePasswords, createJWT, hashPassword } from "../modules/auth";

export const createUser = async (req, res) => {
  const user = await prisma.user.create({
    data: {
      username: req.body.username,
      password: await hashPassword(req.body.password),
      email: req.body.email,
    },
  });

  const token = createJWT(user);
  res.json({ token });
};

export const singIn = async (req, res) => {
  const user = await prisma.user.findUnique({
    where: {
      username: req.body.username,
    },
  });
  const isValid = await comparePasswords(req.body.password, user.password);

  if (!isValid) {
    res.status(401);
    res.json({ message: "wrong username or password" });
  }

  const token = createJWT(user);
  res.json({ token, name: user.username, message: "welcome back" });

  res.status(200);
};
