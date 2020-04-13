const fs = require('fs');

const errloginHTML = fs.readFileSync('./views/errlogin.html', 'utf8');
const errLoginGet = (req, res) => res.send(errloginHTML);
module.exports = errLoginGet;
