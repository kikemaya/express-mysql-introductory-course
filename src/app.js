import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

import "./config.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.set("appName", "Express server");

app.use(indexRoutes);
app.use("/api/v1", employeesRoutes);

app.use((req, res, next) => {
    res.status(404).json({ message: "Endpoint Not Found" });
});

export default app;