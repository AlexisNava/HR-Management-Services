const { createServer } = require('http');

require('dotenv').config();

// Express App
const app = require('./src/app');

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || '0.0.0.0';
const server = createServer(app);

server.listen(PORT, HOST, () => {
  // eslint-disable-next-line no-console
  console.log(`The server is running at http://${HOST}:${PORT}`);
});
