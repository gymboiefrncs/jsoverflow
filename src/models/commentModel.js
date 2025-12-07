import { pool } from "../config/db.js";

export const insertComment = async (
  comment,
  userId,
  postId,
  parentId = null
) => {
  const result = await pool.query(
    "insert into comments (userid, postid, content, parentId) values ($1, $2, $3, $4) returning *",
    [userId, postId, comment, parentId]
  );

  return result.rows[0];
};
