const express = require('express');

const app = express();
const port = 3000;
const errLoginGet = require('./middlewares/errloginget.js');
const loginGet = require('./middlewares/loginget.js');
const registerGet = require('./middlewares/registerget.js');
const gameGet = require('./middlewares/gameget.js');
const registerPost = require('./middlewares/registerpost.js');
const loginAuthGet = require('./middlewares/loginauthget.js');

app.use(express.urlencoded());
app.use('/static', express.static('public'));

app.get('/', loginGet);
app.get('/game', gameGet);
app.get('/register', registerGet);
app.get('/errlogin', errLoginGet);
app.post('/register', registerPost);
app.get('/login-auth', loginAuthGet);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
