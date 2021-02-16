const fs = require('fs');

const menuHTML = fs.readFileSync('./views/menu.html', 'utf8');
const menuGet = (req, res) => res.send(menuHTML);

module.exports = menuGet;
