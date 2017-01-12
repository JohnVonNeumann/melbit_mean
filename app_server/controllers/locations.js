/* GET home page */
module.exports.home = function(req, res) {
  res.render('home', { title: 'Home' });
};

/* GET Location Info page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', { title: 'Location Info' });
};

/* GET reviews page */
module.exports.reviews = function(req, res) {
  res.render('index', { title: 'Reviews' });
};

/* GET new review page */
module.exports.addReview = function(req, res) {
  res.render('location-review-form', { title: 'Add Review' });
};

/* GET directory page */
module.exports.directory = function(req, res) {
  res.render('directory', { title: 'View All Locations'
    locations: [{
      name: 'Altius Coffee Brewers',
      address: '517 Flinders Lane, Melbourne, Victoria, 3000, Australia',
      rating: 5,
      facilities: ['Cafe', 'Pastries', 'Trendy', 'Small Business'],
      distance: '100m',
      location: {lat:-37.819659, lng:144.956444}
    },{
      name: 'Design Industries',
      address: 'Level 1, 268 Rosslyn St, West Melbourne, Victoria, 3003, Australia',
      rating: 4,
      facilities: ['Software', 'Atlassian-Certified', 'Enterprise-Services'],
      distance: '1.1km',
      location: {lat:-37.810520, lng:144.946315}
    },{
      name: 'Imbiss25',
      address: '25 Blessington St, Saint Kilda, Victoria, 3182, Australia',
      rating: 3,
      facilities: ['Cafe', 'Lunch', 'Food', 'Child-Friendly'],
      distance: '2.5km',
      location: {lat:-37.870698, lng:144.980169},
    },{
      name: 'Melbourne Bitcoin Technology Centre',
      address: '89/91 City Rd, Southbank, Victoria, 3006, Australia',
      rating: 2,
      facilities: ['Co-Working Space', 'Shared Offices', 'Corporate', 'Bitcoin Services'],
      distance: '1km',
      location: {lat:-37.822549, lng:144.965126}
    },{
      name: 'Jimbo\'s Cafe',
      address: '120 Spencer Street, Melbourne, Victoria, 3000, Australia',
      rating: 1,
      facilities: ['Cafe', 'Lunch', 'Office Cafe', 'Food'],
      distance: '300m',
      location: {lat:-37.818223, lng:144.954088}
    }]
  });
};

/* GET get listed page */
module.exports.getListedRequest = function(req, res) {
  res.render('index', { title: 'Submit Form For Listing' });
};
