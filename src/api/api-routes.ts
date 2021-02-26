const API_Router = require('express').Router();

API_Router.get('/', function (req, res) {
  res.send('Express + TypeScript Server')
});

export { API_Router };
