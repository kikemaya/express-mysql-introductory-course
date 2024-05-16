import { Router } from "express";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  getEmployeeById,
  deleteEmployeeById,
} from "./../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", createEmployee);
router.put("/employees", updateEmployee);
router.delete("/employees/:id", deleteEmployeeById);

export default router;
