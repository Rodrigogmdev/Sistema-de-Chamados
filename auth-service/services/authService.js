const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { users, User } = require('../models/userModel');
let nextId = 1;

const JWT_SECRET = 'sua-chave-secreta-super-segura';

class AuthService {
  async register(name, email, password) {
    const existingUser = users.find(u => u.email === email);
    if (existingUser) {
      throw new Error('O e-mail já está em uso.');
    }

    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = new User(nextId++, name, email, hashedPassword);
    users.push(newUser);

  
    return { id: newUser.id, name: newUser.name, email: newUser.email };
  }

  async login(email, password) {
    const user = users.find(u => u.email === email);
    if (!user) {
      throw new Error('Credenciais inválidas.');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      throw new Error('Credenciais inválidas.');
    }

    const token = jwt.sign({ id: user.id, name: user.name }, JWT_SECRET, {
      expiresIn: '1h', 
    });

    return { token };
  }

  validateToken(token) {
    try {
      const decoded = jwt.verify(token, JWT_SECRET);
      return { valid: true, user: decoded };
    } catch (error) {
      return { valid: false };
    }
  }
}

module.exports = new AuthService();