const fs = require('fs');

const registerPost = (req, res) => {
  const { email, password } = req.body;
  if (fs.existsSync('users.db')) {
    const registeredUsers = fs
      .readFileSync('users.db')
      .toString()
      .split('\n');
    for (let i = 0; i < registeredUsers.length; i += 1) {
      const user = registeredUsers[i];
      const e = user.split(':')[0];
      if (e === email) {
        res.redirect('/register/?err');
        return;
      }
      fs.appendFileSync('users.db', `${email}:${password} \n`, {
        flags: 'a+'
      });
      res.redirect('/');
      return;
    }
  } else {
    fs.appendFileSync('users.db', `${email}:${password} \n`, {
      flags: 'a+'
    });
    res.redirect('/');
  }
};
module.exports = registerPost;
