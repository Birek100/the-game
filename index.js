const express = require('express');

const app = express();
const port = 3000;
const fs = require('fs');

const loginHTML = fs.readFileSync('./views/login.html', 'utf8');
const gameHTML = fs.readFileSync('./views/game.html', 'utf8');
const registerHTML = fs.readFileSync('./views/register.html', 'utf8');
const errloginHTML = fs.readFileSync('./views/errlogin.html', 'utf8');

app.use(express.urlencoded());

app.use('/static', express.static('public'));
app.get('/', (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.query, 'err')) {
    const errorLogin = loginHTML.replace(
      '{error}',
      '<div class=error>Login Error</div>',
    );
    res.send(errorLogin);
  } else {
    const noneErrorLogin = loginHTML.replace('{error}', '');
    res.send(noneErrorLogin);
  }
});
app.get('/game', (req, res) => res.send(gameHTML));
app.get('/register', (req, res) => {
  if (Object.prototype.hasOwnProperty.call(req.query, 'err')) {
    const errorRegister = registerHTML.replace(
      '{error}',
      '<div class=error>User Exists</div>',
    );
    res.send(errorRegister);
  } else {
    const noneErrorRegister = registerHTML.replace('{error}', '');
    res.send(noneErrorRegister);
  }
});

const handleErrlogin = require('./middleware.js')
app.get('/errlogin', handleErrlogin);


//app.get('/errlogin', (req, res) => res.send(errloginHTML));
//const errlogin = require('./middleware.js')

app.post('/register', (req, res) => {
  const { email, password } = req.body;
  if (fs.existsSync('users.db')) {
    const registeredUsers = fs
      .readFileSync('users.db')
      .toString()
      .split('\n');
    for (let i = 0; i < registeredUsers.length; i += 1) {
      const user = registeredUsers[i];
      const e = user.split(':')[0];
      if (e === email) {
        res.redirect('/register/?err');
        return;
      }
      fs.appendFileSync('users.db', `${email}:${password} \n`, {
        flags: 'a+',
      });
      res.redirect('/');
      return;
    }
  } else {
    fs.appendFileSync('users.db', `${email}:${password} \n`, {
      flags: 'a+',
    });
    res.redirect('/');
  }
});
app.get('/login-auth', (req, res) => {
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
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
