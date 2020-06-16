const Service = require('./service');

module.exports = (app) => {
   return {
      async getAll(request, response) {
        const service = await Service.init();
        response.json({
          data: service.getData(),
          count: service.getCount(),
        });
      },
   };
};
