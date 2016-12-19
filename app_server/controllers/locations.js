/* GET home page */
module.exports.home = function(req, res) {
  res.render('index', { title: 'Home' });
};

/* GET Location Info page */
module.exports.locationInfo = function(req, res) {
  res.render('index', { title: 'Location Info' });
};

/* GET reviews page */
module.exports.reviews = function(req, res) {
  res.render('index', { title: 'Reviews' });
};

/* GET new review page */
module.exports.addReview = function(req, res) {
  res.render('index', { title: 'New Review' });
};

/* GET directory page */
module.exports.directory = function(req, res) {
  res.render('directory', { title: 'View All Locations' });
};

/* GET get listed page */
module.exports.getListedRequest = function(req, res) {
  res.render('index', { title: 'Submit Form For Listing' });
};
