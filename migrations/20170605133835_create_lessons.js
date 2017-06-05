
exports.up = function(knex, Promise) {
  return knex.schema.createTable('lessons', function(table) {
    table.increments();
    table.datetime('time');
    table.string('subject').notNullable();
    table.string('standard').notNullable();
    table.text('essential_question').notNullable();
    table.text('activities').notNullable();
    table.text('reflections');
    table.text('notes');
    table.integer('day_id').references('id').inTable('days');
    table.integer('user_id').references('id').inTable('users').onDelete('cascade');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('lessons')
};
