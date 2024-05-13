import { Router } from "express";

import { helloWorld, ping } from "../controllers/index.controller.js";

const router = Router();

router.get("/", helloWorld);

router.get("/ping", ping);

export default router;
