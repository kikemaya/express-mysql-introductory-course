import { pool } from "./../db.js";

export const getEmployees = (req, res) => res.send("Getting employees...");

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?, ?)",
    [name, salary]
  );

  res.status(201).send({ id: rows.insertId, name, salary });
};

export const updateEmployee = (req, res) => res.send("Updating employee...");
export const deleteEmployee = (req, res) => res.send("Deleting employee...");
