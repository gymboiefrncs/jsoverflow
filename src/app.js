import express from "express";
import { globalErrorHandler } from "./middlewares/globalerrorHandler.js";
import router from "./routes/authRoutes.js";
import { sessionConfigMiddleware } from "./middlewares/session.js";

export const app = express();

app.use(express.json());

app.use(sessionConfigMiddleware);

app.use("/auth", router);

app.use(globalErrorHandler);
