import Router from "express";
import { query } from "../index.js";

const guestsRouter = new Router();

guestsRouter.get("/", async (req, res) => {
  try {
    const q = "SELECT * FROM guests";
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /guests)" });
  }
});

guestsRouter.post("/", async(req, res) => {
  try {
    const q =
      "INSERT INTO guests (`name`, `comment`) VALUES(?)";
    const values = [
      req.body.name,
      req.body.comment,
    ];

    await query(q, [values], (error) => {
      return res.json(error || "Guest has been created successfully");
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server POST /guests)" });
  }
});

export default guestsRouter;
