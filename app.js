require('dotenv').config();
const logger = require('morgan');
const express = require('express');
const bodyParser = require('body-parser');
const createError = require('http-errors');
const cookieParser = require('cookie-parser');

const RS = require('./middleware/request');
const response = require('./helpers/http/response');
const nconf = require('./config');


const app = express();

app.use(logger('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static('public'));

app.use(RS.parseQuery);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
// eslint-disable-next-line no-unused-vars
app.use((err, req, res, next) => {
  console.log(err);
  const status = err.status || response.status.INTERNAL_SERVER_ERROR;
  const data = response.dispatch({
    error: err,
  });
  res.status(status).json(data);
});

module.exports = app;
