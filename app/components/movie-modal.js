import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    openModal: function(movie) {
      console.log(movie);
    }
  },
});
