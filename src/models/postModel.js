import { pool } from "../config/db.js";

export const insertPostModel = async (title, content, userId, tagId) => {
  const result = await pool.query(
    "insert into posts (userid, title, content) values ($1, $2, $3) returning postid, title, content, created_at",
    [userId, title, content]
  );

  for (const id of tagId) {
    await pool.query("insert into post_tags (postid, tagid) values ($1, $2)", [
      result.rows[0].postid,
      id,
    ]);
  }
  return result.rows[0];
};

export const updatePostModel = async (updateContent, postId) => {
  const fields = [];
  const values = [];
  let placeholder = 1;

  for (const key in updateContent) {
    fields.push(`${key} = $${placeholder}`);
    values.push(updateContent[key]);
    placeholder++;
  }
  values.push(Number(postId));
  const result = await pool.query(
    `update posts set ${fields.join(
      ", "
    )} where postid = $${placeholder} returning *`,
    values
  );
  return result.rows[0];
};

export const deletePostModel = async (postId) => {
  const result = await pool.query("delete from posts where postid = $1", [
    postId,
  ]);
};
