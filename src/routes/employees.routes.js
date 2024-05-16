import { Router } from "express";

import {
  getEmployees,
  createEmployee,
  updateEmployeeById,
  getEmployeeById,
  deleteEmployeeById,
} from "./../controllers/employees.controller.js";

const router = Router();

router.get("/employees", getEmployees);
router.get("/employees/:id", getEmployeeById);
router.post("/employees", createEmployee);
//In MySQL, if we send only a few datums through the put verb, the whole object updates their data and the undefined datums are established with "null"
router.patch("/employees/:id", updateEmployeeById);
router.delete("/employees/:id", deleteEmployeeById);

export default router;
