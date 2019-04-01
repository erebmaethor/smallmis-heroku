const server = require('./server/hapi').server;
const plugins = require('./server/hapi').plugins;
const mongoose = require('mongoose');
require('./server/mongo');

(async () => {
  try {
    await server.register(plugins);
    // static frontend
    server.route({
      method: 'GET',
      path: '/{param*}',
      handler: {
        directory: {
          path: './frontend/build/',
          index: ['index.html'],
        },
      },
    });

    await server.start();
    console.log(`Server running at: ${server.info.uri}`);

    return server;
  } catch (e) {
    console.error(e);
  }
})();

const gracefulExit = () => {
  mongoose.connection.close(() => {
    process.exit(0);
  });
};

process.on('SIGINT', gracefulExit).on('SIGTERM', gracefulExit);
