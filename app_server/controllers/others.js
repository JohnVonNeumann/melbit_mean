// removed the Home page function, this will be pushed over into the locations
// controller as our root will point towards the map API

/* GET about page */
module.exports.about = function(req, res) {
  res.render('index', { title: 'About' });
};

/* GET contact page */
module.exports.contact = function(req, res) {
  res.render('index', { title: 'Contact' });
};

/* GET FAQ page */
module.exports.faq = function(req, res) {
  res.render('index', { title: 'FAQ' });
};

/* GET blog page */
module.exports.blog = function(req, res) {
  res.render('index', { title: 'Blog' });
};
