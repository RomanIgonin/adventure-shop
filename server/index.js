import express from "express";
import config from "config";
import mysql from "mysql2";
import cors from "cors";
import authRouter from "./routes/auth.js";
import util from 'util';

const app = express();
const PORT = config.get("serverPort");

// todo Наверное нужно спрятать эти данные
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Slipknot300896",
  database: "data",
});

export const query = util.promisify(db.query).bind(db);

app.use(express.json());
app.use(cors());
app.use("/auth", authRouter);

// todo Добавь несуществующий роут
app.get("/", (req, res) => {
  res.json("HELLO");
});

// todo Убери в отдельный роут
app.get("/articles", async (req, res) => {
  const q = "SELECT * FROM articles";

  await query(q, (error, data) => {
    if (error) res.json(error);
    else res.json(data);
  });
});

app.post("/articles", async(req, res) => {
  const q =
    "INSERT INTO articles (`title`, `introText`, `fullText`, `cover`) VALUES(?)";
  const values = [
    req.body.title,
    req.body.introText,
    req.body.fullText,
    req.body.cover,
  ];

  await query(q, [values], (error, data) => {
    if (error) res.json(error);
    else res.json("Article has been created successfully");
  });
});

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
