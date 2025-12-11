import express from "express";
import { validateTags } from "../validators/tagValidator.js";
import * as tagController from "../controllers/tagController.js";

export const router = express.Router();
