const client = require("../client");

const createBooks = async (books) => {
  const { title, isbn } = books;
  const {
    rows: [createdBook],
  } = await client.query(
    `
          INSERT INTO books (title, isbn)
          VALUES ($1, $2)
          RETURNING *
      `,
    [title, isbn]
  );
  return createdBook;
};

const getBooks = async () => {
  const { rows } = await client.query(`
        SELECT * FROM books
    `);
  return rows;
};

module.exports = { createBooks, getBooks };
