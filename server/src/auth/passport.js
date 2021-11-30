const passport = require('passport');
const GithubStrategy = require('passport-github2').Strategy;
const { User } = require('../models');

const githubStrategy = new GithubStrategy({
  clientID: process.env.GITHUB_CLIENT_ID,
  clientSecret: process.env.GITHUB_CLIENT_SECRET,
  callbackUrl: `${process.env.BACKEND_URL}/users/github/callback`,
}, async (accessToken, refreshToken, profile, done) => {
  try {
    let user = await User.findOne({ where: { username: profile.username } });
    if (!user) {
      user = await User.create({ username: profile.username, avatarUrl: profile.photos[0].value });
    }
    return done(null, user);
  } catch (e) {
    console.log(e);
    return done(e, null);
  }
});

passport.use('github', githubStrategy);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((obj, done) => {
  done(null, obj);
});

module.exports = passport;
