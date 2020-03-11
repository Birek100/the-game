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
app.get('/', (req, res) => {
	if (req.query.hasOwnProperty('err')) {
  		const errorLogin = loginHTML.replace('{error}', '<div class=error>Login Error</div>');
  		res.send(errorLogin);
	}
	else {
		const noneErrorLogin = loginHTML.replace('{error}', '');
		res.send(noneErrorLogin);
	} 
});
app.get('/game', (req, res) => res.send(gameHTML));
app.get('/register', (req, res) => {
	if (req.query.hasOwnProperty ('err')) {
		const errorRegister = registerHTML.replace('{error}', '<div class=error>User Exists</div>');
		res.send(errorRegister);
	}
	else{
		const noneErrorRegister = registerHTML.replace('{error}', '');
		res.send(noneErrorRegister);
	}
});
app.get('/errlogin', (req, res) => res.send(errloginHTML));
app.post('/register', (req, res) => {
 	const email = req.body.email;
 	const password = req.body.password;
 	if (fs.existsSync('users.db')) {	
 		const registeredUsers = fs.readFileSync('users.db').toString().split("\n");
		for(let i = 0; i < registeredUsers.length; i++) {
			const user = registeredUsers[i];
			const e = user.split(':')[0];
			if (e == email) {
				res.redirect('/register/?err'); 
				return;
				}	
			else {
  				fs.appendFileSync('users.db', email + ':' + password +'\n', {flags: 'a+'});
 				res.redirect('/'); 
				return ;
			}
		}
	}
	else {fs.appendFileSync('users.db', email + ':' + password +'\n', {flags: 'a+'});
		res.redirect('/'); 
		return ;
	}
});
app.get('/login-auth', (req, res) => {
	const name = req.query.name;
	const password = req.query.password;
	const registeredUsers = fs.readFileSync('users.db').toString().split("\n");

	for(let i = 0; i < registeredUsers.length; i++) {
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
app.listen(port, () => console.log(`Example app listening on port ${port}!`))