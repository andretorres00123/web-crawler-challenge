const Service = require('./service');

module.exports = (app) => {
   return {
      async findAll(request, response) {
        const service = await Service.init();
        response.json(service.getData());
      },
   };
};
