
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lessons').del()
    .then(function () {
      // Inserts seed entries
      return knex('lessons').insert([
        {date_taught: new Date(2017, 5, 5, 0, 0, 0, 0), subject: 'Science', content: 'TSW draw the layers of the earth', 
        reflections: 'My students enjoyed the creative side of the lesson, although I did not find it to be meaningful.', user_id: 1},
        {date_taught: new Date(2017, 5, 5, 0, 0, 0, 0), subject: 'Math', content: 'TSW multiply 2-digit numbers', 
        reflections: 'Students doing well with this concept', user_id: 1},
        {date_taught: new Date(2017, 5, 5, 0, 0, 0, 0), subject: 'Language Arts', content: 'TSW use quotation marks to indicate dialogue in comics', 
        reflections: 'Good activity...will keep for next year', user_id: 1},
        {date_taught: new Date(2017, 5, 5, 0, 0, 0, 0), subject: 'Social Studies', content: 'TSW write "I Have a Dream" speeches', 
        reflections: 'My students enjoyed the creative side of the lesson, although I did not find it to be meaningful.', user_id: 1},
        {date_taught: new Date(2017, 5, 6, 0, 0, 0, 0), subject: 'Science', content: 'TSW read chapter 3 in the Science text', 
        reflections: 'This lesson worked well', user_id: 1},
      ]);
    });
};
