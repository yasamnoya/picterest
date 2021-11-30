const hasLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  return res.sendStatus(401);
};

module.exports = {
  hasLoggedIn,
};
