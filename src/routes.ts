const Router = require('express').Router();
import { API_Router } from "./api/api-routes";
import { AuthMiddleware } from "./api/middlewares";
var fs = require('fs');

Router.get('/', function (_, res) {
  // check for frontend build file from npm run build
  if (fs.existsSync(__dirname + "/frontend/index.html")) {
    res.sendFile('frontend/index.html', { root: __dirname })
  } else {
    res.status(404).send("Front-end build folder not found");
  }
});

Router.use('/api', [AuthMiddleware], API_Router);

Router.all('*', function (_, res) {
  res.redirect('/');
});

export { Router };
