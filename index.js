const express = require('express')
const app = express()
const port = 3000
const fs = require('fs');
app.use('/static', express.static('public'));

const data = fs.readFileSync('./views/login.html','utf8'); 

app.get('/', (req, res) => res.send(data))

const data1 = fs.readFileSync('./views/game.html','utf8');

app.get('/game', (req, res) => res.send(data1))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
