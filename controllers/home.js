const nodemailer = require('nodemailer');
const sendGridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
  sendGridTransport({
    auth: {
      api_key: process.env.SENDGRID_KEY,
    },
  })
);

var succ_or_fail = null

exports.sendMail = (req, res, next) => {
  const { uname, email, message } = req.body;
  transporter.sendMail({
    to: 'bpsrohitmalik@gmail.com',
    from: 'bpsrohitmalik@gmail.com',
    subject: 'Rohit Portfolio | Message',
    html: `
          <div style="background-color: #e9e9e9; padding-bottom: 25px">
            <h1 style="text-align:center; font-family: 'Oleo Script', cursive; padding: 10px">
              findRohit
            </h1>
            <div style="background-color: white; margin: 5px auto 25px; width: 80%; border: 1px solid #777; padding: 20px">
            <div style="font-family: 'Open Sans','Helvetica Neue','Helvetica',Helvetica,Arial,sans-serif; font-size: x-large; margin: 10px 10px 25px">
              <span>From(username): </span>${uname}<br/><br/>
              <span>mail: </span>${email}<br/><br/>
              <span>message: </span>${message}<br/><br/>
          </div>
        `,
  })
  .then(() => {
    succ_or_fail = 'Your message is received by Rohit Malik'
    res.redirect('/')
  })
  .catch(err => {
    succ_or_fail = 'An error occured. Please try again!'
    res.redirect('/')
  })
};

exports.homePage = (req, res, next) => {
  res.render('home', {
    pageTitle: 'Rohit Malik',
    success_or_failure: succ_or_fail
  });
};
