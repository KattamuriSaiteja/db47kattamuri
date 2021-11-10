var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var earphones_controller = require('../controllers/earphones');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/earphones', earphones_controller.earphones_create_post);
// DELETE request to delete Costume.
router.delete('/earphones/:id', earphones_controller.earphones_delete);
// PUT request to update Costume.
router.put('/earphones/:id',
    earphones_controller.earphones_update_put);
// GET request for one Costume.
router.get('/earphones/:id', earphones_controller.earphones_detail);
// GET request for list of all Costume items.
router.get('/earphones', earphones_controller.earphones_list);
module.exports = router;
