const router = require('express').Router();
const passport = require('../auth/passport');

router.get('/github', passport.authenticate('github'));

router.get('/github/callback', passport.authenticate('github'), (req, res) => {
  res.send('logged in!');
});

module.exports = router;
