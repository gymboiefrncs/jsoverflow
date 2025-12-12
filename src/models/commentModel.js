import { pool } from "../config/db.js";

export const createCommentModel = async (
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

export const updateCommentModel = async (content, commentId) => {
  const result = await pool.query(
    "update comments set content = $1 where commentid = $2 returning *",
    [content, commentId]
  );
  return result.rows[0];
};

export const deleteCommentModel = async (commentId) => {
  const result = await pool.query("delete from comments where commentid = $1", [
    commentId,
  ]);
};
