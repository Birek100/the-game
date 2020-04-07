
/*function hello () {
	console.log('bleble')
};*/

//module.exports = function (('/errlogin', (req, res) => res.send(errloginHTML));
  
//var log = ('/errlogin', (req, res) => res.send(errloginHTML)


const express = require('express');
const app = express();
const fs = require('fs');
const loginHTML = fs.readFileSync('./views/login.html', 'utf8');
const gameHTML = fs.readFileSync('./views/game.html', 'utf8');
const registerHTML = fs.readFileSync('./views/register.html', 'utf8');
const errloginHTML = fs.readFileSync('./views/errlogin.html', 'utf8');
const errloginHTML2 = fs.readFileSync('./views/errlogin2.html', 'utf8');


app.get('/errlogin', (req, res) => res.send(errloginHTML));
app.get('/errlogin2', (req, res) => res.send(errloginHTML2));
module.exports = app

//handleErrlogin






//const logger = function('/errlogin', (req, res)) { res.send(errloginHTML)};




//app.get('/errlogin', (req, res) => res.send(errloginHTML));
//module.exports = {
//	er = er
//}



/*module.exports = {
    hello : hello('export')
}*/

//module.exports = 'Hello Worls'
