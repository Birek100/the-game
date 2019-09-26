const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const loginHTML = fs.readFileSync('./views/login.html','utf8'); 
const gameHTML = fs.readFileSync('./views/game.html','utf8');
const registerHTML = fs.readFileSync('./views/register.html','utf8');
app.use('/static', express.static('public'));
app.get('/', (req, res) => res.send(loginHTML))
app.get('/game', (req, res) => res.send(gameHTML))
app.get('/register', (req, res) => res.send(registerHTML))
app.use('/static', express.static('public'));
app.get('/', (req, res) => res.send(loginHTML))
app.get('/game', (req, res) => res.send(gameHTML))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))