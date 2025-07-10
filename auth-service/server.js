const app = require('./app');
const PORT = process.env.AUTH_PORT || 4000; 

app.listen(PORT, () => console.log(`Microserviço de Autenticação rodando na porta ${PORT}`));