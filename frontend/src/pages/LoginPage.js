var React = require('react');
var api = require('../services/api');

var useNavigate = require('react-router-dom').useNavigate;

function LoginPage() {
  var _React$useState = React.useState(''), email = _React$useState[0], setEmail = _React$useState[1];
  var _React$useState2 = React.useState(''), password = _React$useState2[0], setPassword = _React$useState2[1];
  var navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await api.login({ email, password });
      const token = response.data.token;

      
      localStorage.setItem('authToken', token);
      alert('Login realizado com sucesso!');

     
      navigate('/products');
    } catch (error) {
      alert('Falha no login. Verifique suas credenciais.');
      console.error(error);
    }
  }

  return React.createElement('div', { style: { padding: '20px', maxWidth: '400px', margin: 'auto' } },
    React.createElement('h2', null, 'Login'),
    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('input', {
        type: 'email',
        value: email,
        onChange: function (e) { setEmail(e.target.value); },
        placeholder: 'Email',
        required: true,
        style: { width: '100%', padding: '10px', marginBottom: '10px' }
      }),
      React.createElement('input', {
        type: 'password',
        value: password,
        onChange: function (e) { setPassword(e.target.value); },
        placeholder: 'Senha',
        required: true,
        style: { width: '100%', padding: '10px', marginBottom: '10px' }
      }),
      React.createElement('button', {
        type: 'submit',
        style: { width: '100%', padding: '10px', cursor: 'pointer' }
      }, 'Entrar')
    )
  );
}

module.exports = LoginPage;