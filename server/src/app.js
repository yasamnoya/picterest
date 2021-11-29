const express = require('express');
const morgan = require('morgan');
const router = require('./routes');

const app = express();

app.use(morgan('common'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

module.exports = app;
