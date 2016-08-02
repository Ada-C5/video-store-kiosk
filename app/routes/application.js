import Ember from 'ember';

export default Ember.Route.extend({
 model: function(params) {
   var query = { page: this.controllerFor('application').get('page') }
   return this.store.query('application', query)
 },
queryParams: {
 page: {
   refreshModel: true
 }
 }
});

//
// jeremy's
// export default Ember.Route.extend({
//   model(params) {
//     return this.store.query('movie', {page: 1})
//     .then(function(movies){
//       return {page:1, movies: movies}
//     })
//   }
// })
// whatever this returns, template and controller will have access to , called model
