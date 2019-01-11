import http from 'http';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import { HOST, PORT, GRAPHIQL } from './environment';

import schema from './graphql/schema';

const server = express();

server.use(express.json());

server.use('/graphql', graphqlHTTP({
  graphiql: GRAPHIQL,
  schema
}));

http
  .createServer(server)
  .listen(PORT, HOST, () =>
    console.log(`Server listening on http://${HOST}:${PORT}`)
  );
