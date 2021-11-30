const router = require('express').Router();
const passport = require('../auth/passport');
const { hasLoggedIn } = require('../middlewares/auth');
const { User } = require('../models');

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

router.get('/:username/pictures', async (req, res) => {
  try {
    const user = await User.findOne({ where: { username: req.params.username } });
    const pictures = await user.getPictures({ include: ['User', 'Likes'] });
    res.send(pictures);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

module.exports = router;
