const expressSession = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(expressSession.Store);
const { sequelize } = require('../models');

const session = expressSession({
  secret: process.env.SESSION_SECRET,
  store: new SequelizeStore({
    db: sequelize,
  }),
  saveUninitialized: false,
  resave: false,
  proxy: true,
});

module.exports = session;
