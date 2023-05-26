import { Router } from "express";

import Item from "../models/Item.js";
const createRouter = Router();

createRouter.post("/item/add", async (req, res) => {
  try {
    const count = await Item.countDocuments();
    const item = Item({ ...req.body, serial: count + 1 });
    await item.save();

    return res.status(201).json({
      message: "Item created succefully!!",
    });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

export default createRouter;
