import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Office Space', 'Fight Club', 'Jurassic Park', 'The Matrix', 'Psycho', 'Jaws'];
  }
});
