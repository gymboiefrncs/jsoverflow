import { pool } from "../config/db.js";

export const createTagModel = async (tags) => {
  let ids = [];
  for (const tag of tags) {
    const result = await pool.query(
      "insert into tags (name) values ($1)  returning tagid",
      [tag]
    );
    ids.push(result.rows[0].tagid);
  }
  return ids;
};
