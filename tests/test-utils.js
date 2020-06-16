const config = require('../config/config');
const newsTestData = require('./data/news');

const setUpMocksForAppStartupSuccess = (mocks) => {
  mocks.axios.get.mockImplementation((url) => {
    if (url === config.crawler.url) {
      return Promise.resolve({
        'data': newsTestData,
      });
    }
    return Promise.reject(new Error(`${url} not implemented`));
  });
};

module.exports = {
  setUpMocksForAppStartupSuccess,
};
