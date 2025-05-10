exports.saveToLocalStorage = function(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
};
exports.getFromLocalStorage = function(key) {
  var item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};