
exports.up = function(knex, Promise) {
  return knex.schema.createTable('days', function(table) {
    table.increments();
    table.date('date').notNullable();
    table.integer('user_id').references('id').inTable('users').onDelete('cascade');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('days');
};
