import knex from 'knex';

export const { NODE_ENV = 'development', HOST = '127.0.0.1', PORT = 3000, GRAPHIQL = true } = process.env;

export default knex(require('../knexfile'));
