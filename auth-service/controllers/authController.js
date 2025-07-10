
const authService = require('../services/authService');

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await authService.register(name, email, password);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await authService.login(email, password);
    res.json(result);
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

exports.validateToken = (req, res) => {
  const token = req.headers['authorization']?.split(' ')[1]; 

  if (!token) {
    return res.status(401).json({ message: 'Token não fornecido.' });
  }

  const result = authService.validateToken(token);

  if (result.valid) {
    res.json({ ...result, user: result.user });
  } else {
    res.status(401).json({ valid: false, message: 'Token inválido ou expirado.' });
  }
};