var React = require('react');
var api = require('../services/api');
var useNavigate = require('react-router-dom').useNavigate;

function RegisterPage() {
  var _React$useState = React.useState(''), name = _React$useState[0], setName = _React$useState[1];
  var _React$useState2 = React.useState(''), email = _React$useState2[0], setEmail = _React$useState2[1];
  var _React$useState3 = React.useState(''), password = _React$useState3[0], setPassword = _React$useState3[1];
  var navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await api.register({ name, email, password });
      alert('Cadastro realizado com sucesso! Faça o login.');
      
      navigate('/login');
    } catch (error) {
      alert('Falha no cadastro. Tente novamente.');
      console.error(error);
    }
  }

  return React.createElement('div', { style: { padding: '20px', maxWidth: '400px', margin: 'auto' } },
    React.createElement('h2', null, 'Registrar'),
    React.createElement('form', { onSubmit: handleSubmit },
      React.createElement('input', {
        value: name,
        onChange: function (e) { setName(e.target.value); },
        placeholder: 'Nome',
        required: true,
        style: { width: '100%', padding: '10px', marginBottom: '10px' }
      }),
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
      }, 'Registrar')
    )
  );
}

module.exports = RegisterPage;