const passport         = require('passport');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;

const CLIENT_ID =
  "1019957356265-as3hnu2ecqooip6fngc227n672g3oq1m.apps.googleusercontent.com";
const CLIENT_SECRET = "NcKuNrHJ6BvNuP56nsGkKb7v";
const AUTHORIZE_URI = "https://accounts.google.com/o/oauth2/v2/auth";
const PEOPLE_URI = "https://people.googleapis.com/v1/contactGroups";

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID      : CLIENT_ID,
    clientSecret  : CLIENT_SECRET,
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, function(request, accessToken, refreshToken, profile, done){
    console.log('profile: ', profile);
    var user = profile;
    done(null, user);
  }
));

module.exports = passport;