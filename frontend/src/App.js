var React = require('react');
var Router = require('react-router-dom');
var Link = Router.Link, BrowserRouter = Router.BrowserRouter, Routes = Router.Routes, Route = Router.Route;
var Users = require('./pages/Users');
var Products = require('./pages/Products');
var Reports = require('./pages/Reports');

function App() {
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
      React.createElement(Link, {
        to: '/users',
        style: {
          color: '#fff',
          fontSize: '18px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        },
        onMouseOver: function (e) {
          e.target.style.color = '#ffcc00';
        },
        onMouseOut: function (e) {
          e.target.style.color = '#fff';
        }
      }, 'Usuários'),
      React.createElement(Link, {
        to: '/products',
        style: {
          color: '#fff',
          fontSize: '18px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        },
        onMouseOver: function (e) {
          e.target.style.color = '#ffcc00';
        },
        onMouseOut: function (e) {
          e.target.style.color = '#fff';
        }
      }, 'Produtos'),
      React.createElement(Link, {
        to: '/reports',
        style: {
          color: '#fff',
          fontSize: '18px',
          textDecoration: 'none',
          fontWeight: 'bold',
          transition: 'all 0.3s ease'
        },
        onMouseOver: function (e) {
          e.target.style.color = '#ffcc00';
        },
        onMouseOut: function (e) {
          e.target.style.color = '#fff';
        }
      }, 'Relatórios')
    ),
    React.createElement(Routes, null,
      React.createElement(Route, { path: '/users', element: React.createElement(Users) }),
      React.createElement(Route, { path: '/products', element: React.createElement(Products) }),
      React.createElement(Route, { path: '/reports', element: React.createElement(Reports) })
    )
  );
}

module.exports = App;
