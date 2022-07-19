// Create some seed data for your DB!

const users = [
  {
    name: "jeff",
    location: "denver",
    cardNumber: 123,
  },
  {
    name: "steve",
    location: "castle rock",
    cardNumber: 456,
  },
  {
    name: "sarah",
    location: "longmont",
    cardNumber: 789,
  },
];

const books = [
  {
    title: "call of the wild",
    isbn: 123456789,
  },
  {
    title: "the big sleep",
    isbn: 987654321,
  },
  {
    title: "on the road",
    isbn: 456789123,
  },
];

const authors = [
  {
    name: "jack london",
  },
  {
    name: "raymond chandler",
  },
  {
    name: "jack kerowak",
  },
];

module.exports = { users, books, authors };
