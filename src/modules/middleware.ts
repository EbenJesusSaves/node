import { validationResult } from "express-validator";

export const inputValidators = (req, res, next) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(200);
    res.json({ errors: errors.array() });
  } else {
    next();
  }
};
