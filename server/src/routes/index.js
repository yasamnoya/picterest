const router = require('express').Router();
const { hasLoggedIn } = require('../middlewares/auth');

router.get('/', (req, res) => {
  res.send('Homepage');
});

router.get('/private', hasLoggedIn, (req, res) => {
  res.send('Private');
});

router.use('/pictures', require('./pictures.route'));
router.use('/users/', require('./users.route'));

module.exports = router;
