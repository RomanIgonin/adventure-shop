import express from "express";
import config from "config";
import mysql from "mysql2";
import cors from "cors";
import util from 'util';
import authRouter from "./routes/auth.js";
import articlesRouter from "./routes/articles.js";
import advRouter from "./routes/adv.js";
import guestsRouter from "./routes/guests.js";
import catalogRouter from "./routes/catalog.js";

const app = express();
const PORT = config.get("serverPort");
const HOST = config.get("host");
const USER = config.get("user");
const PASSWORD = config.get("password");

const db = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: "data",
});

export const query = util.promisify(db.query).bind(db);

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("HELLO");
});
app.use("/auth", authRouter);
app.use("/articles", articlesRouter);
app.use("/adv", advRouter);
app.use("/guests", guestsRouter);
app.use("/catalog", catalogRouter);

const start = async () => {
  try {
    app.listen(PORT, () => {
      console.log("Server started on port", PORT);
    });
  } catch (error) {
    console.log("error", error);
  }
};

start();
