import { pool } from "./../db.js";

export const helloWorld = (req, res) => {
  res.send("Hello World!");
};
export const ping = async (req, res) => {
  const result = await pool.query("SELECT 'Pong' AS response");
  res.json(result[0][0]);
};
