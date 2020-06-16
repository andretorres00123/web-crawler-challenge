const next = require('next');
const app = require('./server/app');
const config = require('./config/config');

const dev = process.env.NODE_ENV !== 'production';
const server = next({ dev, dir: __dirname });
const handle = server.getRequestHandler();

server.prepare().then(() => {

   app.all('*', (req, res) => {
      return handle(req, res)
    })  

   app.listen(config.app.port, (err) => {
      if (err) throw err
      console.log(`Server listening on http://localhost:${config.app.port}`)
    })
});
