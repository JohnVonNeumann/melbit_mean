/* GET home page */
module.exports.home = function(req, res) {
  res.render('home', { title: 'Home' });
};

/* GET Location Info page */
module.exports.locationInfo = function(req, res) {
  res.render('location-info', {
    title: 'Jimbo\'s Cafe',
    sidebar: {
      context: 'is on Melbit because it is an outlet that accepts and adds to the Bitcoin economy.',
      callToAction: 'If you have been here and you liked it - or if you didn\'t - please leave a review to help other other just like you.'
    },
    location: {
      name: 'Jimbo\'s Cafe',
      address: '120 Spencer Street, Melbourne, Victoria, 3000, Australia',
      rating: 1,
      facilities: ['Cafe', 'Lunch', 'Office Cafe'],
      coords: {lat:-37.818223, lng:144.954088},
      openingTimes: [{
        days: 'Monday - Friday',
        opening: '7:00am',
        closing: '7:00pm',
        closed: false
      },{
        days: 'Saturday',
        opening: '6:00am',
        closing: '12:00pm',
        closed: false
      },{
        days: 'Sunday',
        closed: true
      }],
      reviews: [{
        author: 'Louis Willcock',
        rating: 5,
        timestamp: '04 Jan 2017',
        reviewText: 'Yo FAM this place Lit AF *insert crying face emoji*'
      },{
        author: 'JustAnotherNormie',
        rating: 1,
        timestamp: '01 Jan 2017',
        reviewText: 'They don\'t even serve chicken tendies. REEEEEEEEEEE'
      }]
    }
  });
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
  res.render('directory', {
    title: 'View All Locations',
    sidebar: "Melbit helps you find places to use and spread your bitcoin.",
    // Locations json data array that holds relevant entry data to be pulled into the directory view
    locations: [{
      name: 'Altius Coffee Brewers',
      address: '517 Flinders Lane, Melbourne, Victoria, 3000, Australia',
      rating: 5,
      facilities: ['Cafe', 'Pastries', 'Trendy'],
      distance: '100m',
      coords: {lat:-37.819659, lng:144.956444}
    },{
      name: 'Design Industries',
      address: 'Level 1, 268 Rosslyn St, West Melbourne, Victoria, 3003, Australia',
      rating: 4,
      facilities: ['Software', 'Atlassian-Certified', 'Enterprise-Services'],
      distance: '1.1km',
      coords: {lat:-37.810520, lng:144.946315}
    },{
      name: 'Imbiss25',
      address: '25 Blessington St, Saint Kilda, Victoria, 3182, Australia',
      rating: 3,
      facilities: ['Cafe', 'Lunch', 'Food'],
      distance: '2.5km',
      coords: {lat:-37.870698, lng:144.980169},
    },{
      name: 'Melbourne Bitcoin Technology Centre',
      address: '89/91 City Rd, Southbank, Victoria, 3006, Australia',
      rating: 2,
      facilities: ['Co-Working Space', 'Offices', 'Bitcoin Services'],
      distance: '1km',
      coords: {lat:-37.822549, lng:144.965126}
    },{
      name: 'Jimbo\'s Cafe',
      address: '120 Spencer Street, Melbourne, Victoria, 3000, Australia',
      rating: 1,
      facilities: ['Cafe', 'Lunch', 'Office Cafe'],
      distance: '300m',
      coords: {lat:-37.818223, lng:144.954088}
    }]
  });
};

/* GET get listed page */
module.exports.getListedRequest = function(req, res) {
  res.render('contact', { title: 'Contact' });
};
