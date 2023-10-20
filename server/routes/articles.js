import Router from "express";
import { query } from "../index.js";

const articlesRouter = new Router();

articlesRouter.get("/", async (req, res) => {
  try {
    const q = "SELECT * FROM articles";
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /articles)" });
  }
});

articlesRouter.post("/", async(req, res) => {
  try {
    const q =
      "INSERT INTO articles (`title`, `introText`, `fullText`, `cover`) VALUES(?)";
    const values = [
      req.body.title,
      req.body.introText,
      req.body.fullText,
      req.body.cover,
    ];

    await query(q, [values], (error) => {
      return res.json(error || "Article has been created successfully");
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server POST /articles)" });
  }
});

export default articlesRouter;
