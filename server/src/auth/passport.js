const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;

const githubStrategy = new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackUrl: `${process.env.BACKEND_URL}/users/github/callback`,
}, ((accessToken, refreshToken, profile, done) => {
  // User.findOrCreate({ githubId: profile.id }, (err, user) => done(err, user));
  console.log(profile.username, profile.photos[0].value);
  done(null, profile);
}));

passport.use('github', githubStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
