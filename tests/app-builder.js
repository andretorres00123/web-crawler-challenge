const axios = require('axios');
const testUtils = require('./test-utils');

const configureMocksForSuccess = () => {
  testUtils.setUpMocksForAppStartupSuccess({
    axios,
  });
};

const buildAppForSuccess = () => {
  configureMocksForSuccess()
  const app = require('../server/app');
  return {
    app,
    axios,
  }
};

module.exports = {
  buildAppForSuccess,
};
