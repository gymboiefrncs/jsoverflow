import { pool } from "../config/db.js";

export const insertContent = async (title, content, userId) => {
  const result = await pool.query(
    "insert into posts (userid, title, content) values ($1, $2, $3) returning postid, title, content, created_at",
    [userId, title, content]
  );
  return result.rows[0];
};
