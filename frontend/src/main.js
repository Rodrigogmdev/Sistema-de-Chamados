var React = require('react');
var ReactDOM = require('react-dom/client');
var App = require('./App');
ReactDOM.createRoot(document.getElementById('root')).render(
  React.createElement(React.StrictMode, null, React.createElement(App))
);