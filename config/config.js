module.exports = {
   app: {
      port: parseInt(process.env.APP_PORT, 10) || 3000,
      path: process.env.APP_PATH || '/api',
   },
};
