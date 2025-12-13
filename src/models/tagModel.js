import { pool } from "../config/db.js";

export const createTagModel = async (tags) => {
  const { rows } = await pool.query("select * from tags where name = any($1)", [
    tags,
  ]);

  const existing = new Set(rows.map((row) => row.name));

  const missingTags = tags.filter((tag) => !existing.has(tag));

  const existingIds = rows.map((row) => row.tagid);
  const newIds = [];
  if (missingTags.length > 0) {
    const fields = [];
    let placeholder = 1;

    for (const tag of missingTags) {
      fields.push(`($${placeholder++})`);
    }
    const result = await pool.query(
      `insert into tags (name) values ${fields.join(", ")} returning tagid`,
      missingTags
    );
    result.rows.map((row) => newIds.push(row.tagid));
  }
  const allTagIds = [...existingIds, ...newIds];
  return allTagIds;
};
