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

/* GET detail earphones page */
router.get('/detail', earphones_controlers.earphones_view_one_Page);
module.exports = router;

/* GET create earphones page */
router.get('/create', earphones_controlers.earphones_create_Page);

/* GET create update page */
router.get('/update', earphones_controlers.earphones_update_Page);

/* GET create earphones page */
router.get('/delete', earphones_controlers.earphones_delete_Page);
