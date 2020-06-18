module.exports = (app) => {
  const config = require('../../config/config');
  const appPath = config.app.path;
  const peopleController = require('./controller')(app);

  app.route(`${appPath}/news`)
    .get(peopleController.getAll);

};
