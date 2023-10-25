import Router from "express";
import { query } from "../index.js";

const advRouter = new Router();

advRouter.get("/", async (req, res) => {
  try {
    const q = "SELECT * FROM advertising";
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /adv)" });
  }
});

advRouter.get("/catalog", async (req, res) => {
  try {
    const q = "SELECT * FROM catalogAdvertising";
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /adv/catalog)" });
  }
});

export default advRouter;
