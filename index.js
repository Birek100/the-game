const express = require('express');

const app = express();
const port = 3000;

const errLoginGet = require('./errloginget.js');
const loginGet = require('./loginget.js');
const registerGet = require('./registerget.js');
const gameGet = require('./gameget.js');
const registerPost = require('./registerpost.js');
const loginAuthGet = require('./loginauthget.js');

app.use(express.urlencoded());
app.use('/static', express.static('public'));

app.get('/', loginGet);
app.get('/game', gameGet);
app.get('/register', registerGet);

app.get('/errlogin', errLoginGet);

app.post('/register', registerPost);
app.get('/login-auth', loginAuthGet);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
