const express = require('express');
const glob = require('glob');
const path = require('path');

class AppFactory {
  getApp() {
    const app = express();
    this._setupRoutes(app);
    this._setupMiddleware(app);
    app.info = {'startTime': new Date()};
    return app;
  }

  _setupRoutes(app) {
    const routesFiles = glob.sync('server/**/routes.js');
    routesFiles.forEach((file) => {
      require(path.join(process.cwd(), file))(app);
    });
  }

  _setupMiddleware(app) {
    const file = 'server/common/middleware.js';
    require(path.join(process.cwd(), file))(app);
  }
}

module.exports = new AppFactory().getApp();
