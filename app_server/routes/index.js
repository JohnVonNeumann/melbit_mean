var express = require('express');
var router = express.Router();
var ctrlLocations = require('../controllers/locations');
var ctrlOthers = require('../controllers/others');
var ctrlUsers = require('../controllers/users');

/* Locations Pages */
router.get('/', ctrlLocations.home);
router.get('/location', ctrlLocations.locationInfo);
router.get('/location/reviews', ctrlLocations.reviews)
router.get('/location/reviews/new', ctrlLocations.addReview);
router.get('/location/directory', ctrlLocations.directory);
router.get('/location/getListed', ctrlLocations.getListedRequest);


/* Others Pages */
router.get('/about', ctrlOthers.about);
router.get('/blog', ctrlOthers.blog);
router.get('/contact', ctrlOthers.contact);
router.get('/faq', ctrlOthers.faq);


/* Users Pages */
router.get('/users/login', ctrlUsers.login);
router.get('/users/logout', ctrlUsers.logout);
router.get('/users/signup', ctrlUsers.signup);
router.get('/users/signup/confirm', ctrlUsers.signupConfirm);
router.get('/users/profile', ctrlUsers.profile);
router.get('/users/profile/new', ctrlUsers.profileNew);
router.get('/users/profile/favourites', ctrlUsers.favourites);

module.exports = router;
