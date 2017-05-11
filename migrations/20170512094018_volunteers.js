
exports.up = function(knex, Promise) {
  return knex.schema.createTable('volunteers', function (table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.string('location')
    table.string('category')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('volunteers')
};
