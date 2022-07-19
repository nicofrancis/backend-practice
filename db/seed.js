// -------This file will Reset your Database--------- //

const client = require("./client");
const { createUsers } = require("./adapters/users");
const { users, books, authors } = require("./seedData");

// Drop Tables
const dropTables = async () => {
  console.log("Dropping tables!!!");
  await client.query(`
    DROP TABLE IF EXISTS userBooks;  
    DROP TABLE IF EXISTS users;    
    DROP TABLE IF EXISTS authors;
    DROP TABLE IF EXISTS books;
  `);
  console.log("...tables dropped.");
};
// Create Tables
const createTables = async () => {
  console.log("...creating tables");

  await client.query(`
  
  CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    location VARCHAR (255) NOT NULL,
    cardNumber VARCHAR (255) NOT NULL
  );
   
  CREATE TABLE authors (
    "authorId" SERIAL PRIMARY KEY,
    name VARCHAR (255) NOT NULL 
    
    
  );
  

  CREATE TABLE books (
    title VARCHAR (255) NOT NULL,
    isbn INTEGER UNIQUE
    
    
  );
  

  CREATE TABLE userBooks (
    "userId" INTEGER REFERENCES users(id),
    "bookId" INTEGER REFERENCES books(isbn)    
    
  );

  
  `);
};

// Seed Data
const seedData = async () => {
  console.log(`...seeding users`);
  for (let user of users) {
    await createUsers(user);
  }
};
// Call all of the functions together and 'BUILD' you db
const rebuildDb = async () => {
  client.connect();
  try {
    await dropTables();
    await createTables();
    await seedData();
  } catch (error) {
    console.error(error);
  } finally {
    client.end();
  }
};

// Call the rebuildDb function
rebuildDb();
