import { pool } from "../config/db.js";

export const createPostModel = async (title, content, userId, tagId) => {
  const result = await pool.query(
    `
      insert into posts (userid, title, content) 
      values ($1, $2, $3) returning postid, title, content, created_at
    `,
    [userId, title, content]
  );
  await setPostTags(tagId, result.rows[0].postid);
  return result.rows[0];
};

export const updatePostModel = async (tagId, updateContent, postId) => {
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

  await setPostTags(tagId, postId);

  return result.rows[0];
};

export const setPostTags = async (postId, tagId) => {
  const postTagFields = [];
  const postTagValues = [];
  let postTagPlaceholder = 1;

  await pool.query("delete from post_tags where postid = $1", [postId]);

  for (const id of tagId) {
    postTagFields.push(`($${postTagPlaceholder++}, $${postTagPlaceholder++})`);
    postTagValues.push(postId, id);
  }

  await pool.query(
    `insert into post_tags (postid, tagid) values ${postTagFields.join(", ")}`,
    postTagValues
  );
};

export const deletePostModel = async (postId) => {
  const result = await pool.query("delete from posts where postid = $1", [
    postId,
  ]);
};
