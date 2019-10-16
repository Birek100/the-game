const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
const loginHTML = fs.readFileSync('./views/login.html','utf8'); 
const gameHTML = fs.readFileSync('./views/game.html','utf8');
const registerHTML = fs.readFileSync('./views/register.html','utf8');
app.use(express.urlencoded())
app.use('/static', express.static('public'));
app.get('/', (req, res) => res.send(loginHTML))
app.get('/game', (req, res) => res.send(gameHTML))
app.get('/register', (req, res) => res.send(registerHTML))
app.post('/register', (req, res) => {
  console.log(req.body)
  const email = req.body.email
  const password = req.body.password
  fs.appendFileSync('users.db', email + ':' + password +'\n', {'flags': 'a+'});
  res.end() 
})
app.listen(port, () => console.log(`Example app listening on port ${port}!`))