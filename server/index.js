import express from "express";
import config from "config";
import mysql from "mysql2";
import cors from "cors";
import authRouter from "./routes/auth.js";

const app = express();
const PORT = config.get("serverPort");

export const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Slipknot300896",
  database: "data",
});

app.use(express.json());
app.use(cors());
app.use("/api/auth", authRouter);

app.get("/", (req, res) => {
  res.json("HELLO");
});

app.get("/articles", (req, res) => {
  const query = "SELECT * FROM articles";

  db.query(query, (error, data) => {
    if (error) res.json(error);
    else res.json(data);
  });
});

app.post("/articles", (req, res) => {
  const query =
    "INSERT INTO articles (`title`, `introText`, `fullText`, `cover`) VALUES(?)";
  const values = [
    req.body.title,
    req.body.introText,
    req.body.fullText,
    req.body.cover,
  ];

  db.query(query, [values], (error, data) => {
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
