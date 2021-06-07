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
    // case: user is not null , 로그인 성공으로 간주
    res.cookie('loginUserInfo', req.user != null ? req.user : null);
    res.redirect('http://localhost:8080');
}

module.exports = router;