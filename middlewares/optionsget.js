const fs = require('fs');

const optionsHTML = fs.readFileSync('./views/options.html', 'utf8');
const optionsGet = (req, res) => res.send(optionsHTML);

module.exports = optionsGet;
