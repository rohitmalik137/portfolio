const Auth = require('../models/auth');

exports.getLoginPage = (req, res, next) => {
  res.render('login');
};

exports.postLogin = (req, res, next) => {
  const { username, password } = req.body;
  console.log(username, password);
  console.log(process.env.MY_USERNAME);
  if (
    username == process.env.MY_USERNAME &&
    password == process.env.MY_PASSWORD
  ) {
    const user = new Auth({
      username,
      password,
    });
    console.log(username, password);
    req.session.isLoggedIn = true;
    req.session.user = user;
    return req.session.save((err) => {
      if (err) console.log(err);
      else {
        console.log(username, password);
        res.redirect('/admin');
      }
    });
  }
};
