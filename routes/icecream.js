var express = require('express');
const icecream_controller= require('../controllers/icecream');
var router = express.Router();
var passport = require('passport');

/* GET icecream */
router.get('/', icecream_controller.icecream_view_all_Page );
router.get('/detail', icecream_controller.icecream_view_one_Page);

// GET request for creating a new costume page.
router.get('/create', icecream_controller.icecream_create_Page);

// GET create update page */
//router.get('/update', icecream_controller.icecream_update_Page);

// GET delete costume page */
router.get('/delete', icecream_controller.icecream_delete_Page);

/* GET update costume page */
//router.get('/update', icecream_controller.icecream_update_Page);


// A little function to check if we have an authorized user and continue on or
// redirect to login.
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }

    /* GET update costume page */
router.get('/update', secured,icecream_controller.icecream_update_Page);
    
    router.post('/login', passport.authenticate('local'), function(req, res) {
      res.redirect('/');
      });



module.exports = router;


