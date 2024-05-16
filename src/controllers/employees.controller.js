import { pool } from "./../db.js";

export const getEmployeeById = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (rows.length <= 0)
    return res.status(404).json({ message: "Employee not Found" });

  res.json(rows[0]);
};

export const getEmployees = async (req, res) => {
  const [rows] = await pool.query("SELECT * FROM employee");

  res.json(rows);
};

export const createEmployee = async (req, res) => {
  const { name, salary } = req.body;

  const [rows] = await pool.query(
    "INSERT INTO employee (name, salary) VALUES (?, ?)",
    [name, salary]
  );

  res.status(201).send({ id: rows.insertId, name, salary });
};

export const deleteEmployeeById = async (req, res) => {
  const [result] = await pool.query("DELETE FROM employee WHERE id = ?", [
    req.params.id,
  ]);

  if (result.affectedRows <= 0) {
    return res.status(404).json({ message: "Employee not found..." });
  }

  res.sendStatus(204);
};

export const updateEmployeeById = async (req, res) => {
  const { id } = req.params;
  const { name, salary } = req.body;

  const [result] = await pool.query(
    "UPDATE employee SET name = IFNULL(?, name), salary = IFNULL(?, salary) WHERE id = IFNULL(?, id)",
    [name, salary, id]
  );

  if (result.affectedRows === 0) {
    return res.status(404).json({ message: "Employee not found" });
  }

  const [rows] = await pool.query("SELECT * FROM employee WHERE id = ?", [id]);

  res.status(201).json(rows[0]);
};
