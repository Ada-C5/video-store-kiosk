import Ember from 'ember';

export default Ember.Route.extend({
	// hooks to model and returns all from API call
  model: function () { 
    return this.store.findAll('movies');
    // return ['Office Space', 'Fight Club', 'Jurassic Park', 'The Matrix', 'Psycho', 'Jaws'];
  }
  // setupController: function(controller, model) {
  //   controller.set('model', model);
  // }
});