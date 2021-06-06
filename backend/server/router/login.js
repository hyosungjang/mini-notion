const express  = require('express');
const router   = express.Router();
const passport = require('../config/passport.js');

router.get('/google', 
    passport.authenticate('google', { scope: ['profile'] })
);

router.get('/google/callback',
  passport.authenticate('google'), authSuccess
);

function authSuccess(req, res) {
    console.log('=========================== Login AuthSuccess ===========================');
    if(req.user != null) {
        res.json({userName : req.user});
    } else {
        res.redirect('http://localhost:8080');
    }
}

module.exports = router;