
/*function hello () {
	console.log('bleble')
};*/

//module.exports = function (('/errlogin', (req, res) => res.send(errloginHTML));
  
//var log = ('/errlogin', (req, res) => res.send(errloginHTML)



//const errloginHTML = fs.readFileSync('./views/errlogin.html', 'utf8');

const express = require('express');
const app = express();
const fs = require ('fs');
const errloginHTML = fs.readFileSync('./views/errlogin.html', 'utf8');
module.exports = app.get('/errlogin', (req, res) => res.send(errloginHTML));


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
