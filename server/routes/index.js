const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Homepage');
});

module.exports = router;
