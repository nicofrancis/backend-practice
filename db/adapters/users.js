const client = require("../client");

const createUsers = async (user) => {
  const { name, location, cardNumber } = user;
  const {
    rows: [createdUser],
  } = await client.query(
    `
          INSERT INTO users (name, location, cardNumber)
          VALUES ($1, $2, $3)
          RETURNING *
      `,
    [name, location, cardNumber]
  );
  return createdUser;
};

const getUsers = async () => {
  const { rows } = await client.query(`
        SELECT * FROM users
    `);
  return rows;
};

const booksCheckedOut = async () => {
  const {} = await client.query(`
  
  `);
};

module.exports = { createUsers, getUsers };
