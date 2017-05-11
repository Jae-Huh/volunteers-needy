
exports.up = function(knex, Promise) {
  return knex.schema.table('vacancies', table => {
    table.string('title')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.table('vacancies', table => {
    table.dropColumn('title')
  })
}
