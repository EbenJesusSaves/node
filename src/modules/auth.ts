import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

//-------- password hashing -------------//
export const comparePasswords = (password, hash) => {
  return bcrypt.compare(password, hash);
};

//password hashing
export const hashPassword = (password) => {
  return bcrypt.hash(password, 5);
};

export const createJWT = (user) => {
  const token = jwt.sign(
    { id: user.id, username: user.username },
    process.env.JWT_SECRET
  );
  return token;
};

export const protect = (req, res, next) => {
  const bearer = req.headers.authorization;
  if (!bearer) {
    res.status(401);
    res.send("not authorized yeah");
    return;
  }

  const [, token] = bearer.split(" ");

  if (!token) {
    res.status(401);
    res.json({ message: "not authorized token" });
    return;
  }

  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    req.user = user;
    //call the next function after you're done with what you're doing
    next();
  } catch (error) {
    res.status(401);
    res.json({ message: "not authorized because mismatch" });
    return;
  }
};

//NOTE, it's possible to execute multiple middlewares on different lines
