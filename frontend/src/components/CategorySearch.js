var React = require('react');
var api = require('../services/api');

function CategorySearch() {
    var _useState4 = React.useState(''), cat = _useState4[0], setCat = _useState4[1];
    var _useState5 = React.useState([]), results = _useState5[0], setResults = _useState5[1];

    function search() {
        api.getByCategory(cat).then(function (r) {
            setResults(r.data);
        });
    }

    return React.createElement('div', {
        style: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '20px',
            fontFamily: 'Arial, sans-serif',
            maxWidth: '500px',
            margin: '0 auto'
        }
    },
        // Input
        React.createElement('input', {
            value: cat,
            onChange: function (e) { setCat(e.target.value); },
            placeholder: 'Digite a categoria...',
            style: {
                padding: '10px',
                fontSize: '16px',
                border: '1px solid #ccc',
                borderRadius: '5px',
                marginBottom: '10px',
                width: '100%',
                maxWidth: '400px'
            }
        }),
        // Botão
        React.createElement('button', {
            onClick: search,
            style: {
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: '5px',
                fontWeight: 'bold',
                cursor: 'pointer',
                marginBottom: '20px',
                fontSize: '16px',
                width: '100%',
                maxWidth: '422px'
            }
        }, 'Buscar'),
        // Lista de resultados
        React.createElement('ul', {
            style: { listStyleType: 'none', padding: 0, width: '100%' }
        },
            results.map(function (p, index) {
                return React.createElement('li', {
                    key: p.id,
                    style: {
                        backgroundColor: index === 0 ? '#ffeeba' : '#f9f9f9',
                        padding: '12px',
                        marginBottom: '10px',
                        border: '1px solid #ccc',
                        borderRadius: '5px',
                        fontWeight: index === 0 ? 'bold' : 'normal',
                        color: '#333',
                        width: '100%',
                        maxWidth: '400px'
                    }
                }, p.name);
            })
        )
    );
}

module.exports = CategorySearch;
