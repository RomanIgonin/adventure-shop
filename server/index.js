import express from "express";
import mysql from "mysql2";
import cors from "cors";
import util from 'util';
import authRouter from "./routes/auth.js";
import articlesRouter from "./routes/articles.js";
import advRouter from "./routes/adv.js";
import guestsRouter from "./routes/guests.js";
import catalogRouter from "./routes/catalog.js";
import cartRouter from "./routes/cart.js";
import faqRouter from "./routes/faq.js";

const app = express();
const SERVER_PORT = process.env.SERVER_PORT
const HOST = process.env.HOST;
const USER = process.env.DB_USER;
const PASSWORD = process.env.PASSWORD;
const DATABASE = process.env.DATABASE;
const DATABASE_PORT = process.env.DATABASE_PORT;

const db = mysql.createConnection({
  host: HOST,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  port: DATABASE_PORT
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
app.use("/cart", cartRouter);
app.use("/faq", faqRouter);

const start = async () => {
  try {
    app.listen(SERVER_PORT, () => {
      console.log("Server started on port", SERVER_PORT);
    });
  } catch (error) {
    console.log("error", error);
  }
};

start();
