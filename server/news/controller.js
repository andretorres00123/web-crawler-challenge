const Service = require('./service');

module.exports = (app) => {
   return {
      async getAll(request, response) {
        const { filter } = request.query;

        try {
          const service = await Service.init(filter);
          response.json({
            data: service.getData(),
            count: service.getCount(),
          });
        } catch(err) {
          response.status(500).send(err.message);
        }
      },
   };
};
