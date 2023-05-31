import { Router } from "express";
import Item from "../../models/Item.js";
import requireAuth from "../../middleware/auth.middleware.js"

const router = Router();

router.get("/items", requireAuth, async (req, res, next) => {
  const items = await Item.find();
  res.send(items);
});

export default router;
