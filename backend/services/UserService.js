const { users, User } = require('../models/UserModel');

let nextId = 1;

function createUser(name, email) {
  const newUser = new User(nextId++, name, email);
  users.push(newUser);
  return newUser;
}

function listUsers() {
  return users;
}

module.exports = { createUser, listUsers };
