var React = require('react');
var api = require('../services/api');

function ReportView() {
  var _useState6 = React.useState(null), report = _useState6[0], setReport = _useState6[1];
  
  // Carregar dados ao montar o componente
  React.useEffect(function(){
    api.getReport().then(function(r){ setReport(r.data); });
  }, []);
  
  if(!report) return React.createElement('div', { style: { fontSize: '18px', color: '#555', textAlign: 'center', padding: '50px' } }, 'Carregando...');
  
  // Calculando a porcentagem
  var progressPercentage = report.totalProducts > 0 ? (report.totalUsers / report.totalProducts) * 100 : 0;

  return React.createElement('div', {
    style: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      backgroundColor: '#f4f7fc',
      borderRadius: '8px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: '20px auto',
      color: '#333'
    }
  },

    // Título do relatório
    React.createElement('h2', {
      style: {
        textAlign: 'center',
        fontSize: '24px',
        color: '#007bff',
        marginBottom: '20px',
      }
    }, 'Relatório de Atividades'),

    // Total de Usuários
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        marginBottom: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center' } },
        React.createElement('i', {
          className: 'fas fa-users',
          style: {
            fontSize: '30px',
            color: '#007bff',
            marginRight: '15px'
          }
        }),
        React.createElement('div', null,
          React.createElement('h4', {
            style: { fontSize: '18px', marginBottom: '5px', color: '#007bff' }
          }, 'Total de Usuários'),
          React.createElement('p', { style: { fontSize: '22px', fontWeight: 'bold', color: '#333' } }, report.totalUsers)
        )
      )
    ),

    // Total de Produtos
    React.createElement('div', {
      style: {
        backgroundColor: '#ffffff',
        borderRadius: '8px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)',
        padding: '15px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }
    },
      React.createElement('div', { style: { display: 'flex', alignItems: 'center' } },
        React.createElement('i', {
          className: 'fas fa-cogs',
          style: {
            fontSize: '30px',
            color: '#28a745',
            marginRight: '15px'
          }
        }),
        React.createElement('div', null,
          React.createElement('h4', {
            style: { fontSize: '18px', marginBottom: '5px', color: '#28a745' }
          }, 'Total de Produtos'),
          React.createElement('p', { style: { fontSize: '22px', fontWeight: 'bold', color: '#333' } }, report.totalProducts)
        )
      )
    ),

    // Barra de progresso
    React.createElement('div', { style: { marginTop: '20px' } },
      React.createElement('p', { style: { fontSize: '18px', color: '#333', fontWeight: 'bold' } }, 'Progresso Geral:'),
      React.createElement('div', {
        style: {
          height: '20px',
          backgroundColor: '#e9ecef',
          borderRadius: '5px',
          width: '100%',
          overflow: 'hidden',
          position: 'relative'
        }
      },
        React.createElement('div', {
          style: {
            height: '100%',
            width: progressPercentage + '%',
            backgroundColor: '#007bff',
            borderRadius: '5px',
            position: 'absolute',
            textAlign: 'center',
            color: 'white',
            lineHeight: '20px', // Alinha o texto verticalmente
            fontWeight: 'bold',
            fontSize: '14px'
          }
        },
          `${Math.round(progressPercentage)}%` // Exibindo a porcentagem na barra
        )
      )
    )
  );
}

module.exports = ReportView;
