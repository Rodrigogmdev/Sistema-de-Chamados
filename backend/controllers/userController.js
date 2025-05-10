const { users, User } = require('../models/userModel');
let nextId = 1;

exports.createUser = (req, res) => {
  const { name, email } = req.body;
  const user = new User(nextId++, name, email);
  users.push(user);
  res.status(201).json(user);   
};

exports.listUsers = (req, res) => {
  res.json(users);
};