import Router from "express";
import { query } from "../index.js";

const catalogRouter = new Router();

catalogRouter.get("/", async (req, res) => {
  try {
    const q = "SELECT * FROM catalog";
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /catalog)" });
  }
});


export default catalogRouter;
