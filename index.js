const express = require('express')
const app = express()
const port = 3000
app.use('/static', express.static('public'));
app.get('/', (req, res) => res.send(`<html>
<head>
<link rel="stylesheet" type="text/css" href="/static/styles.css">
<script src="/static/scripts.js"></script>
<title>Penguin Game</title>
</head>
<body>
<div class="container">
<header>
<h1>Pinguins Game</h1>
</header>
<section>
<form action="#" method="post" autocomplete="off">
<div class="register">
<label for="name">Name</label><br>
<input id="name" type="text" required>
</div>
<div class="register">
<label for="password">Password</label><br>
<input id="password" type="password" required>
</div>
<div class="register">
<input type="submit" value="Play">
</div>
</section>
<footer>
All rights reserved &copy
</footer>

</div>
</body>
</html> `))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
