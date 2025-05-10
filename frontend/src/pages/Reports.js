var React = require('react');
var ReportView = require('../components/ReportView');
function Reports() {
  return React.createElement('div', null,
    React.createElement(ReportView)
  );
}
module.exports = Reports;