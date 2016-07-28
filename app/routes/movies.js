import Ember from 'ember';

export default Ember.Route.extend({
	// hooks to model and returns all from API call
  model: function () { 
    return this.store.find('movies');
  }
  // setupController: function(controller, model) {
  //   controller.set('model', model);
  // }
});