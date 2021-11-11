var express = require('express');
const earphones_controlers = require('../controllers/earphones');
var router = express.Router();

/* GET earphones */
router.get('/', earphones_controlers.earphones_view_all_Page);
module.exports = router;

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('earphones', { title: 'Search Results Earphones' });
});

module.exports = router;
