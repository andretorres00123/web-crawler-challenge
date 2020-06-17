module.exports = {
  app: {
    port: parseInt(process.env.APP_PORT, 10) || 8080,
    path: process.env.APP_PATH || '/crawler',
  },
  crawler: {
    url: process.env.WEB_CRAW_URL || 'https://news.ycombinator.com/',
  },
};
