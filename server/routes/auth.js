import Router from "express";
import { db } from "../index.js";

const router = new Router();

router.get("/users", (req, res) => {
  try {
    const query = `SELECT * FROM users`;

    db.query(query, (error, data) => {
      if (error) res.json(error);
      else res.json(data);
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Error on server (registration)" });
  }
});

router.post("/registration", (req, res) => {
  try {
    const { email, password } = req.body;

    // Вернет 1 если email уже существует
    const query = `SELECT EXISTS(SELECT 1 FROM users WHERE email = '${email}')`;

    db.query(query, (error, data) => {
      if (error) {
        res.json(error);
      } else {
        const isUserExist = data;
        console.log("isUserExist", isUserExist);
        res.json(isUserExist);
      }
    });
  } catch (e) {
    console.log(e);
    res.send({ message: "Error on server (registration)" });
  }
});

export default router;
