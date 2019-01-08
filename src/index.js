import http from 'http';
import express from 'express';

import { HOST, PORT } from './environment';

const server = express();

server.use(express.json());

http
  .createServer(server)
  .listen(PORT, HOST, () =>
    console.log(`Server listening on http://${HOST}:${PORT}`)
  );
