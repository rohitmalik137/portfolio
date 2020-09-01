const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const homeRoutes = require('./routes/home');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-po0x5.mongodb.net/portfolio?retryWrites=true&w=majority`;

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.use(homeRoutes);

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
