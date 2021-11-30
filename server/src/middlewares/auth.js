const hasLoggedIn = (req, res, next) => {
  console.log(req.user);
  if (req.isAuthenticated()) return next();
  return res.sendStatus(401);
};

module.exports = {
  hasLoggedIn,
};
