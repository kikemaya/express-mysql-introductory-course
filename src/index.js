import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT);
console.log(app.get("appName") + " listening on port " + PORT);
