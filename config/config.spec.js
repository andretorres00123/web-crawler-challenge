describe('config', () => {
  let config;

  describe('without env variables', () => {
    beforeEach(() => {
      config = require('./config');
    });

    test('should return default values', () => {
      expect(config).toEqual(expect.objectContaining({
        'app': expect.objectContaining({
          'port': expect.any(Number),
          'path': '/api',
        }),
        'crawler': expect.objectContaining({
          'url': 'https://news.ycombinator.com/',
        }),
      }));
    });
  });

  describe('with env variables', () => {
    let initialEnv;

    /* eslint-disable */
    beforeEach(() => {
      initialEnv = process.env;
      process.env.APP_PORT = '4000';
      process.env.APP_PATH = '/whatever';
      process.env.WEB_CRAW_URL = 'https://google.com/';
      jest.resetModules();
      config = require('./config');
    });
    /* eslint-enable */

    afterEach(() => {
      process.env = initialEnv;
      jest.resetModules();
    });

    test('should return env variables values', () => {
      expect(config).toEqual(expect.objectContaining({
        'app': expect.objectContaining({
          'port': 4000,
          'path': '/whatever',
        }),
        'crawler': expect.objectContaining({
          'url': 'https://google.com/',
        }),
      }));
    });
  });
});
