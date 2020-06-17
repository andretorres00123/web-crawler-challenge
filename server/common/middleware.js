const bodyParser = require('body-parser');
const nextI18NextMiddleware = require('next-i18next/middleware').default;

const nextI18next = require('../../i18n');

module.exports = async (app) => {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ 'extended': false }));

  // Setup i18n
  await nextI18next.initPromise;
  app.use(nextI18NextMiddleware(nextI18next));
};
