const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const router = require('./routes');
const passport = require('./auth/passport');

const app = express();

app.use(morgan('common'));
app.use(cors({ origin: process.env.FRONTEND_URL }));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(passport.initialize());

app.use(router);

module.exports = app;
