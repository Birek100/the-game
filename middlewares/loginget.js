const fs = require('fs');

const loginHTML = fs.readFileSync('./views/login.html', 'utf8');
const loginGet = (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.query, 'err')) {
    const errorLogin = loginHTML.replace(
      '{error}',
      '<div class=error>Login Error</div>'
    );
    res.send(errorLogin);
  } else {
    const noneErrorLogin = loginHTML.replace('{error}', '');
    res.send(noneErrorLogin);
  }
};

module.exports = loginGet;
