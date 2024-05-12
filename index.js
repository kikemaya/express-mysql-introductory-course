import express from "express";
import morgan from "morgan";

import { pool } from "./db.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.set("appName", "Express server");
app.set("port", 3000);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/ping", async (req, res) => {
  const result = await pool.query("SELECT 'Pong' AS result");
  // res.json(result);
  res.json(result[0]);
});

app.get("/employees", (req, res) => res.send("Getting employees..."));
app.post("/employees", (req, res) => res.send("Creating employees..."));
app.put("/employees", (req, res) => res.send("Updating employees..."));
app.delete("/employees", (req, res) => res.send("Deleting employees..."));

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(app.get("port"));
console.log(app.get("appName") + " listening on port " + app.get("port"));
