import Ember from 'ember';

export default Ember.Route.extend({
   model: function () {
   var query = { page: this.controllerFor('movies').get('page') };
   return this.store.query('movies', query); //movie?
  }
});
// In the controller, the model is what I return from this function

//queryParams: page number: refreshModel: true
