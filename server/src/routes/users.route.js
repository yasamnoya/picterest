const router = require('express').Router();
const passport = require('../auth/passport');
const { hasLoggedIn } = require('../middlewares/auth');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  res.redirect(`${process.env.FRONTEND_URL}/picterest`);
});

router.get('/me', hasLoggedIn, (req, res) => {
  res.send(req.user);
});

router.get('/logout', (req, res) => {
  req.logOut();
  res.send();
});

module.exports = router;
