import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const requireAuth = (req, res, next) => {
  const token = req.headers["x-access-token"];

  if (!token) {
    return res
      .status(401)
      .json({ error: "acceso no autorizado, Token no proporcionado" });
  }

  try {
    const decoded = jwt.verify(token, process.env.CONFIGJWT);

    req.user = decoded;

    next();
  } catch (error) {
    return res
      .status(401)
      .json({ error: "Acceso no autorizado, Token invalido" });
  }
};

export default requireAuth;
