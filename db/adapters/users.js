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
  console.log(createdUser);
  return createdUser;
};

module.exports = { createUsers };
