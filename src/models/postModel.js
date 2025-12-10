import { pool } from "../config/db.js";

export const insertPostModel = async (title, content, userId, tags) => {
  const postResult = await pool.query(
    "insert into posts (userid, title, content) values ($1, $2, $3) returning postid, title, content, created_at",
    [userId, title, content]
  );
  const postId = postResult.rows[0].postid;
  const tagIds = [];

  for (const tag of tags) {
    const tagResult = await pool.query(
      "insert into tags (name) values ($1) returning tagid",
      [tag]
    );
    tagIds.push(tagResult.rows[0].tagid);
  }

  for (const tagId of tagIds) {
    await pool.query(
      "insert into post_tags (postid, tagid) values ($1, $2) returning *",
      [postId, tagId]
    );
  }
  return postResult.rows[0];
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
