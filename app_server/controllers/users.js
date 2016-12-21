/* GET login page */
module.exports.login = function(req, res) {
  res.render('login', { title: 'Login' });
};

/* GET logout page */
module.exports.logout = function(req, res) {
  res.render('index', { title: 'Logout' });
};

/* GET signup page */
module.exports.signup = function(req, res) {
  res.render('signup', { title: 'Signup' });
};

/* GET signup confirm page */
module.exports.signupConfirm = function(req, res) {
  res.render('index', { title: 'Signup Confirmation' });
};

/* GET profile page */
module.exports.profile = function(req, res) {
  res.render('index', { title: 'Profile' });
};

/* GET new profile page */
module.exports.profileNew = function(req, res) {
  res.render('index', { title: 'Create Profile' });
};

/* GET favourites page */
module.exports.favourites = function(req, res) {
  res.render('index', { title: 'My Favourites' });
};
