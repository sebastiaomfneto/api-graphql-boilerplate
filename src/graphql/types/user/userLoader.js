import knex from 'knex';
import Dataloader from 'dataloader';

export const userLoader = new Dataloader(ids =>
  knex(require('../../../../knexfile'))
    .table('user')
    .select('*')
    .whereIn('id', ids)
);
