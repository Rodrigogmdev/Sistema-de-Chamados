let users = [];
let nextId = 1;

class User {
  constructor(id, name, email, password) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.password = password; 
  }
}

module.exports = { users, User, nextId };