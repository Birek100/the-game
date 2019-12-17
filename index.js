const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');

const loginHTML = fs.readFileSync('./views/login.html','utf8'); 
const gameHTML = fs.readFileSync('./views/game.html','utf8');
const registerHTML = fs.readFileSync('./views/register.html','utf8');
const errloginHTML = fs.readFileSync('./views/errlogin.html', 'utf8');

app.use(express.urlencoded());

app.use('/static', express.static('public'));
app.get('/', (req, res) => res.send(loginHTML));
app.get('/game', (req, res) => res.send(gameHTML));
app.get('/register', (req, res) => res.send(registerHTML));
app.get('/errlogin', (req, res) => res.send(errloginHTML));

app.post('/register', (req, res) => {
 	const email = req.body.email;
 	const password = req.body.password;
 	fs.appendFileSync('users.db', email + ':' + password +'\n', {flags: 'a+'});
 	res.end();
});

app.get('/login-auth', (req, res) => {
	const name = req.query.name;
	const pass = req.query.password;
	const registeredUsers = fs.readFileSync('users.db').toString().split("\n");

	for(let i = 0; i < registeredUsers.length; i++)
	{
		const user = registeredUsers[i];
		const n = user.split(':')[0];
		const p = user.split(':')[1];
		

		if (n === name && p === pass) {
			res.cookie('sid', n + p, { maxAge: 900000, httpOnly: true });
			res.send(gameHTML);
			return;
		}
		
		else {
			res.send(errloginHTML);
			return;
		}
	}
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))