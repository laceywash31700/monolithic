'use strict';
require('dotenv').config();
const {sequelizeDb} = require('./src/auth/models/index.js');
const app = require('./src/server.js');
const PORT = process.env.PORT || 3002;

// make sure our tables are created, start up the HTTP server.
sequelizeDb.sync().then(() => {
  app.listen(PORT, () => console.log('server up'));
}).catch(e => {
  console.error('Could not start server', e.message);
});
