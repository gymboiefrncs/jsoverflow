import express from "express";

import authRouter from "./authRoutes.js";
import postRouter from "./postRoutes.js";
import commentRouter from "./commentRoutes.js";

const router = express.Router();

router.use("/", authRouter);
router.use("/", postRouter);
router.use("/", commentRouter);

export default router;
