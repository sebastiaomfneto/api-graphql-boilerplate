import 'babel-polyfill';

import express from 'express';
import http from 'http';
import graphqlHTTP from 'express-graphql';
import { execute, subscribe } from 'graphql';
import { SubscriptionServer } from 'subscriptions-transport-ws';

import databaseInstance from './environment';
import { HOST, PORT, GRAPHIQL } from './environment';

import schema from './graphql/schema';

/**
 * @type {Express}
 */
const app = express();

app.use(express.json());

app.use(
  '/graphql',
  graphqlHTTP({
    graphiql: GRAPHIQL,
    schema,
    context: {
      db: databaseInstance
    }
  })
);

const server = http.createServer(app);

server.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);

  SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe
    },
    {
      server,
      path: '/subscriptions'
    }
  );
});
