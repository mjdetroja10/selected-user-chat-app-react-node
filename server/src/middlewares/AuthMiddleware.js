import jwt from "jsonwebtoken";
import { jwtSecretKey } from "../config/index.js";

export const AuthMiddleware = (req, res, next) => {
  try {
    const { authorization } = req.headers;

    if (!authorization) return res.send({ message: "unauthorized user" });

    let isTokenValid = jwt.verify(authorization, jwtSecretKey);

    if (!isTokenValid)
      return res.status(401).send({ errors: { message: "Invalidz token" } });

    next();
  } catch (error) {
    res
      .status(500)
      .send({ errors: { message: error?.message || "internal error" } });
  }
};
