const axios = require('axios');
const AUTH_SERVICE_URL = 'http://localhost:4000'; 

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Acesso negado. Nenhum token fornecido.' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const response = await axios.get(`${AUTH_SERVICE_URL}/validate`, {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    });

    if (response.data.valid) {
      req.user = response.data.user; 
      next(); 
    } else {
      res.status(401).json({ message: 'Token inválido ou expirado.' });
    }
  } catch (error) {
    res.status(401).json({ message: 'Falha na autenticação do token.' });
  }
};

module.exports = authMiddleware;