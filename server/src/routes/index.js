const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Homepage');
});

router.use('/pictures', require('./pictures.route'));

module.exports = router;
