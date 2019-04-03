module.exports = {
  client: 'postgresql',
  debug: true,
  connection: {
    database: 'api-graphql-boilerplate-db',
    user: 'postgres',
    password: 'developerIC97'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: './data/migrations'
  }
};
