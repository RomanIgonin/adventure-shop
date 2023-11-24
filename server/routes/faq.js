import Router from "express";
import { query } from "../index.js";

const faqRouter = new Router();

faqRouter.get("/", async (req, res) => {
  try {
    const q = "SELECT * FROM faq";
    await query(q, (error, data) => {
      return res.json(error || data);
    });
  } catch (e) {
    console.log(e);
    res.status(400).json({ message: "Error on server GET /faq)" });
  }
});

export default faqRouter;
