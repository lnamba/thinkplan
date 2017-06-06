
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lessons', function(table) {
    table.increments();
    table.date('date_taught');
    table.string('subject').notNullable();
    table.text('content').notNullable();
    table.text('reflections');
    table.integer('user_id').references('id').inTable('users').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lessons')
};
