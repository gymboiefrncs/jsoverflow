import express from "express";
import { globalErrorHandler } from "./middlewares/globalerrorHandler.js";
import router from "./routes/routes.js";
import { sessionConfigMiddleware } from "./middlewares/session.js";

export const app = express();

app.use(express.json());

app.use(sessionConfigMiddleware);

app.use("/", router);

app.use(globalErrorHandler);
