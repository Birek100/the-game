const fs = require('fs');

const gameHTML = fs.readFileSync('./views/game.html', 'utf8');
const gameGet = (req, res) => res.send(gameHTML);
module.exports = gameGet;
