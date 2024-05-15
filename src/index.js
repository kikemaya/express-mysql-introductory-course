import express from "express";
import morgan from "morgan";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.set("appName", "Express server");
app.set("port", 3000);

app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(app.get("port"));
console.log(app.get("appName") + " listening on port " + app.get("port"));
