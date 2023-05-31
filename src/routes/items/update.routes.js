import { Router } from "express";
import Item from "../../models/Item.js";

const updateRouter = Router();

updateRouter.put("/items", async (req, res) => {
  const { id } = req.query;
  const updates = req.body;

  try {
    const item = await Item.findById(id, {new:true});
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }

    Object.keys(updates).forEach((key) => {
      item[key] = updates[key];
    });

    await item.save();
    res.send(item);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default updateRouter;
