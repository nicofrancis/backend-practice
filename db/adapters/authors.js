const client = require("../client");

const createAuthors = async (author) => {
  const { name } = author;
  const {
    rows: [createdAuthor],
  } = await client.query(
    `
          INSERT INTO authors (name)
          VALUES ($1)
          RETURNING *
      `,
    [name]
  );
  return createdAuthor;
};

const getAuthors = async () => {
  const { rows } = await client.query(`
        SELECT * FROM authors
    `);
  return rows;
};

module.exports = { createAuthors, getAuthors };
