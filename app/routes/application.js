import Ember from 'ember';

// export default Ember.Route.extend({
//   model(params) {
//     console.log("params", params)
//     return $.getJSON('http://localhost:3000/?page={{params.page}}')
//   }
// });


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
