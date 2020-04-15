const fs = require('fs');

const gameHTML = fs.readFileSync('./views/game.html', 'utf8');
const loginAuthGet = (req, res) => {
  const { name, password } = req.query;
  const registeredUsers = fs
    .readFileSync('users.db')
    .toString()
    .split('\n');
  for (let i = 0; i < registeredUsers.length; i += 1) {
    const user = registeredUsers[i];
    const n = user.split(':')[0];
    const p = user.split(':')[1];
    if (n === name && p === password) {
      res.cookie('sid', n + p, { maxAge: 900000, httpOnly: true });
      res.send(gameHTML);
      return;
    }
  }
  res.redirect('/?err');
};
module.exports = loginAuthGet;
