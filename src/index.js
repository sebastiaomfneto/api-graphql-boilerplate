import 'babel-polyfill';

import express from 'express';
import knex from 'knex';
import graphqlHTTP from 'express-graphql';

import { HOST, PORT, GRAPHIQL } from './environment';

import schema from './graphql/schema';

/**
 * @type {Express}
 */
const server = express();

server.use(express.json());

server.use(
  '/graphql',
  graphqlHTTP({
    graphiql: GRAPHIQL,
    schema,
    context: {
      db: knex(require('../knexfile'))
    }
  })
);

server.listen(PORT, HOST, () =>
  console.log(`Server listening on http://${HOST}:${PORT}`)
);
