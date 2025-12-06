import session from "express-session";
import connectPgSimple from "connect-pg-simple";
import { pool } from "../config/db.js";

const pgSession = connectPgSimple(session);

export const sessionConfigMiddleware = session({
  store: new pgSession({
    pool,
    tableName: "sessions",
  }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000,
    httpOnly: true,
  },
});
