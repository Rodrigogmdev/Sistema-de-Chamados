var React = require('react');
var api = require('../services/api');
var UserForm = require('../components/UserForm');

function Users() {
  var _useState7 = React.useState([]), users = _useState7[0], setUsers = _useState7[1];

  React.useEffect(function() {
    api.getUsers().then(function(r) {
      setUsers(r.data);
    });
  }, []);

  return React.createElement('div', { style: { padding: '20px', fontFamily: 'Arial, sans-serif' } },
    React.createElement(UserForm, { onCreated: function(u) { setUsers(users.concat(u)); } }),

    React.createElement('ul', {
      style: {
        listStyleType: 'none',
        padding: 0,
        marginTop: '20px',
        width: '100%',
      }
    },
      users.map(function(u, index) {
        return React.createElement('li', {
          key: u.id,
          style: {
            backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#f1f1f1',
            padding: '12px',
            marginBottom: '8px',
            borderRadius: '5px',
            fontSize: '16px',
            color: '#333',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxSizing: 'border-box'
          }
        },
          // Rótulo "Nome" antes do nome do usuário
          React.createElement('span', {
            style: {
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#007bff',
            }
          }, 'Nome: '),

          // Nome do usuário
          React.createElement('span', {
            style: {
              fontWeight: 'normal',
              color: '#333',
            }
          }, u.name),

          // Rótulo "E-mail" antes do e-mail do usuário
          React.createElement('span', {
            style: {
              fontWeight: 'bold',
              fontSize: '16px',
              color: '#007bff',
            }
          }, ' | E-mail: '),

          // E-mail do usuário
          React.createElement('span', {
            style: {
              fontWeight: 'normal',
              color: '#555',
            }
          }, u.email)
        );
      })
    )
  );
}

module.exports = Users;
