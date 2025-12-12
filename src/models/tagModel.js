import { fi } from "zod/locales";
import { pool } from "../config/db.js";

export const createTagModel = async (tags) => {
  let ids = [];
  const fields = [];
  let placeholder = 1;

  for (const tag of tags) {
    fields.push(`($${placeholder++})`);
  }
  const result = await pool.query(
    `insert into tags (name) values ${fields.join(", ")} returning tagid`,
    tags
  );
  return result.rows;
};
