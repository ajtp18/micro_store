import { Router } from "express";
import Item from "../models/Item.js";

const router = Router();

router.get("/items", async (req, res) => {
  const items = await Item.find();
  res.send(items);
});

export default router;
