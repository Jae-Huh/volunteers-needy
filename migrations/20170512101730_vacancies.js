
exports.up = function(knex, Promise) {
  return knex.schema.createTable('vacancies', function (table) {
    table.increments('id').primary()
    table.integer('user_id').unsigned()
    table.foreign('user_id').references('users.id')
    table.string('job_location')
    table.string('category')
    table.string('description')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('vacancies')
};
