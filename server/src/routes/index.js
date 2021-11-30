const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Homepage');
});

router.use('/pictures', require('./pictures.route'));
router.use('/users/', require('./users.route'));

module.exports = router;
