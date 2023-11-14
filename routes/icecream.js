var express = require('express');
const icecream_controller= require('../controllers/icecream');
var router = express.Router();
/* GET icecream */
router.get('/', icecream_controller.icecream_view_all_Page );
router.get('/detail', icecream_controller.icecream_view_one_Page);

// GET request for creating a new costume page.
router.get('/create', icecream_controller.icecream_create_Page);

module.exports = router;


