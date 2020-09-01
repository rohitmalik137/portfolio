exports.homePage = (req, res, next) => {
  res.render('home', {
    pageTitle: 'Rohit Malik',
  });
};
