const fs = require('fs');

const registerHTML = fs.readFileSync('./views/register.html', 'utf8');
const registerGet = (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.query, 'err')) {
    const errorRegister = registerHTML.replace(
      '{error}',
      '<div class=error>User Exists</div>'
    );
    res.send(errorRegister);
  } else {
    const noneErrorRegister = registerHTML.replace('{error}', '');
    res.send(noneErrorRegister);
  }
};

module.exports = registerGet;
