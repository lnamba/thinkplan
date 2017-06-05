
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('lessons').del()
    .then(function () {
      // Inserts seed entries
      return knex('lessons').insert([
        {time: new Date(2017, 5, 5, 9, 0, 0, 0), subject: 'Science', standard: 'Identify the layers of the Earth: crust, mantle, core (inner and outer)', 
        essential_question: 'What is our world made of?', activities: 'TSW draw the layers of the earth', 
        reflections: 'My students enjoyed the creative side of the lesson, although I did not find it to be meaningful.', notes: 'Reteach tomorrow', day_id: 1, user_id:1},
        {time: new Date(2017, 5, 9, 9, 0, 0, 0), subject: 'Math', standard: 'Represent and solve problems involving multiplication and division.', 
        essential_question: 'How are multiplication and division related?', activities: 'TSW use counters to find the product or quotient of given expressions', 
        reflections: 'Most of my students did great, but some of them just played with the counters.', notes: 'Bobby refused to participate - warning given', day_id: 5, user_id: 1},
        {time: new Date(2017, 5, 9, 10, 0, 0, 0), subject: 'ELA', standard: 'Use commas and quotation marks in dialogue', 
        essential_question: 'Why is it important to use quotation marks in dialogue?', activities: 'TSW use quotation marks to show dialogue in comic strips', 
        reflections: 'The class really enjoyed this activity!', notes: '', day_id: 5, user_id: 1},
        {time: new Date(2017, 5, 9, 11, 0, 0, 0), subject: 'Science', standard: 'Describe how fossils are formed', 
        essential_question: 'How do fossils tell us about life on earth?', activities: 'TSW read "Fossils" on page 27 in Science text', 
        reflections: 'I think I need to provide an activity so students understand this better.', notes: 'Need activity for tomorrow', day_id: 5, user_id: 1}
      ]);
    });
};
