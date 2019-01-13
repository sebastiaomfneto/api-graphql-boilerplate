exports.up = function(knex, Promise) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table
      .string('email')
      .notNullable()
      .unique()
      .index();
    table.boolean('active').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('user');
};
