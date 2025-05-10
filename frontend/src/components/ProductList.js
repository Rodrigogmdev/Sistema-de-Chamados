var React = require('react');
var getProducts = require('../services/api').getProducts;

function ProductList() {
  var _React$useState3 = React.useState([]), products = _React$useState3[0], setProducts = _React$useState3[1];
  React.useEffect(function() {
    getProducts().then(function(r) { setProducts(r.data); });
  }, []);

  return React.createElement('ul', {
    style: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px'
    }
  },
    products.map(function(p) {
      return React.createElement('li', {
        key: p.id,
        style: {
          backgroundColor: '#fff',
          padding: '15px',
          marginBottom: '10px',
          border: '1px solid #ddd',
          borderRadius: '8px',
          boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
          fontSize: '16px',
          fontWeight: 'normal',
          color: '#333',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          transition: 'all 0.3s ease'
        }
      },
        React.createElement('span', {
          style: {
            fontWeight: 'bold',
            color: '#007bff'
          }
        }, p.name),
        React.createElement('span', {
          style: {
            fontStyle: 'italic',
            color: '#888'
          }
        }, `(${p.category})`)
      );
    })
  );
}

module.exports = ProductList;
