const path = require('path');

const express = require('express');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const csrf = require('csurf');
require('dotenv').config();
const Auth = require('./models/auth');

const homeRoutes = require('./routes/home');

const app = express();
app.use(favicon(path.join(__dirname, 'public', 'assets', 'faviconn.ico')));

app.use(bodyParser.urlencoded({ extended: false }));

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-po0x5.mongodb.net/portfolio?retryWrites=true&w=majority`;
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions',
});
const csrfProtection = csrf();
app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));
app.use(
  session({
    secret: 'my secret',
    resave: false,
    saveUninitialized: false,
    store: store,
  })
);
app.use(csrfProtection);

app.use((req, res, next) => {
  if (!req.session.user) {
    return next();
  }
  req.user = new Auth({
    username: process.env.MY_USERNAME,
    password: process.env.MY_PASSWORD,
  });
  next();
});

app.use((req, res, next) => {
  res.locals.isAuthenticated = req.session.isLoggedIn;
  res.locals.csrfToken = req.csrfToken();
  next();
});

app.use(homeRoutes);
app.use('/admin', require('./routes/admin'));
app.use('/admin', require('./routes/auth'));

const port = process.env.PORT || 7000;

mongoose
  .connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((result) => {
    app.listen(port, () => {
      console.log(`Server starting at ${port}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
