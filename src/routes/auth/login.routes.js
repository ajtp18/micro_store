import { Router } from "express";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import Usuario from "../../models/Usuario.js"
import dotenv from "dotenv";
dotenv.config();

const router = Router();

// Ruta de login
router.get("/auth/login", (req, res) => {
  res.send(`
    <h1>Login</h1>
    <form action="/auth/login" method="POST">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" required><br><br>
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" required><br><br>
      <input type="submit" value="Login">
    </form>
  `);
});

router.post("/auth/login", async (req, res) => {
    const { username, password } = req.body;
  
    try {
      // Buscar el usuario en la base de datos
      const usuario = await Usuario.findOne({ username });
      console.log(usuario)
  
      // Verificar si usuario existe
      if (!usuario || !bcrypt.compareSync(password, usuario.password)) {
        return res.status(401).json({ error: "Credenciales inválidas" });
      }
  
      const token = jwt.sign({ username }, process.env.CONFIGJWT, { expiresIn: "3h" });
  
      // Enviar el token en la respuesta JSON
      res.json({ auth: true, token: token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error en el servidor" });
    }
  });
  
  export default router;