var React = require('react');
var createUser = require('../services/api').createUser;
var getFromLocalStorage = require('../utils/localStorage').getFromLocalStorage;
var saveToLocalStorage = require('../utils/localStorage').saveToLocalStorage;

function UserForm(props) {
  var _React$useState = React.useState(''), name = _React$useState[0], setName = _React$useState[1];
  var _React$useState2 = React.useState(''), email = _React$useState2[0], setEmail = _React$useState2[1];

  function handleSubmit(e) {
    e.preventDefault();
    createUser({ name: name, email: email }).then(function(res) {
      props.onCreated(res.data);
      var stored = getFromLocalStorage('users') || [];
      saveToLocalStorage('users', stored.concat([res.data]));
      setName(''); setEmail('');
    });
  }

  return React.createElement('form', { onSubmit: handleSubmit, className: 'form-container' },
    React.createElement('input', {
      value: name,
      onChange: function(e) { setName(e.target.value); },
      placeholder: 'Nome',
      style: {
        padding: '12px',
        marginBottom: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box'
      }
    }),
    React.createElement('input', {
      value: email,
      onChange: function(e) { setEmail(e.target.value); },
      placeholder: 'Email',
      style: {
        padding: '12px',
        marginBottom: '12px',
        border: '1px solid #ccc',
        borderRadius: '8px',
        fontSize: '16px',
        width: '100%',
        boxSizing: 'border-box'
      }
    }),
    React.createElement('button', {
      type: 'submit',
      style: {
        backgroundColor: '#28a745',
        color: '#fff',
        padding: '12px 20px',
        border: 'none',
        borderRadius: '8px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
        transition: 'background-color 0.3s ease'
      },
      onMouseOver: function (e) {
        e.target.style.backgroundColor = '#218838';
      },
      onMouseOut: function (e) {
        e.target.style.backgroundColor = '#28a745';
      }
    }, 'Cadastrar Usuário')
  );
}

module.exports = UserForm;
