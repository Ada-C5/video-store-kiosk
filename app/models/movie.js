import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('string'),
  title: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string')
});
//
// import Ember from 'ember';
//
// export default Ember.Service.extend({
//   api: Ember.inject.service(),
//
//   usernameExists(username) {
//     return this.get('http://localhost:3000').request('title', {
//       model: 'Jaws'
//       // params: {
//       //   page: 1,
//       //   size: 5
//       // }
//     });
//   }
// });
