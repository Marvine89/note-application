const Router = require('express').Router();
import { API_Router } from "./api/api-routes"
import { AuthMiddleware } from "./api/middlewares"

Router.get('/', function (_, res) {
  res.send('Express + TypeScript Server')
});

Router.use('/api', [AuthMiddleware], API_Router);

Router.all('*', function (_, res) {
  res.redirect('/');
});

export { Router };
