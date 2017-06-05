
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('days').del()
    .then(function () {
      // Inserts seed entries
      return knex('days').insert([
        {id: 1, date: new Date(2017, 5, 5), user_id: 1},
        {id: 2, date: new Date(2017, 5, 6), user_id: 1},
        {id: 3, date: new Date(2017, 5, 7), user_id: 1},
        {id: 4, date: new Date(2017, 5, 8), user_id: 1},
        {id: 5, date: new Date(2017, 5, 9), user_id: 1}
      ]);
    });
};
