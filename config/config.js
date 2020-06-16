module.exports = {
   app: {
      port: parseInt(process.env.SMARTMATE_ASSETS_APP_PORT, 10) || 3000,
      path: process.env.SMARTMATE_ASSETS_APP_PATH || '/api',
   },
};
