import { pool } from "../config/db.js";

export const insertUserModel = async (hashed_password, { username, email }) => {
  const result = await pool.query(
    "insert into users (username, email, password) values ($1, $2, $3) returning email, username",
    [username, email, hashed_password]
  );
  return result.rows[0];
};

export const findUserModel = async (email) => {
  const result = await pool.query("select * from users where email = $1", [
    email,
  ]);
  return result.rows[0];
};
