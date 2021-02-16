const logOut = (req, res) => {
  res.clearCookie('sid');
  res.redirect('/');
};

module.exports = logOut;
