var React = require('react');
var Router = require('react-router-dom');
var Link = Router.Link, BrowserRouter = Router.BrowserRouter, Routes = Router.Routes, Route = Router.Route;


var LoginPage = require('./pages/LoginPage');
var RegisterPage = require('./pages/RegisterPage');


var Products = require('./pages/Products');
var Reports = require('./pages/Reports');

function App() {
  const linkStyle = {
    color: '#fff',
    fontSize: '18px',
    textDecoration: 'none',
    fontWeight: 'bold',
  };

  return React.createElement(BrowserRouter, null,
   
    React.createElement('nav', {
      style: {
        backgroundColor: '#007bff',
        padding: '10px 20px',
        borderRadius: '8px',
        display: 'flex',
        justifyContent: 'center',
        gap: '20px'
      }
    },

      React.createElement(Link, { to: '/login', style: linkStyle }, 'Login'),
    
      React.createElement(Link, { to: '/register', style: linkStyle }, 'Registrar'),
      
      React.createElement(Link, { to: '/products', style: linkStyle }, 'Produtos'),
      React.createElement(Link, { to: '/reports', style: linkStyle }, 'Relatórios')
    ),

  
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/login', element: React.createElement(LoginPage) }),
      React.createElement(Route, { path: '/register', element: React.createElement(RegisterPage) }),
      React.createElement(Route, { path: '/products', element: React.createElement(Products) }),
      React.createElement(Route, { path: '/reports', element: React.createElement(Reports) }),
      
      React.createElement(Route, { path: '*', element: React.createElement(LoginPage) })
    )
  );
}

module.exports = App;