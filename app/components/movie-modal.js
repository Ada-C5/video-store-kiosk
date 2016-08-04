import Ember from 'ember';

export default Ember.Component.extend({
  movie: ['title', 'overview', 'release_date', 'inventory'],
  actions: {
    ok: function() {
      this.$('.modal').modal('hide');
    },
    addQueue: function(movie) {
      this.sendAction('addQueue', movie); //This should add to queue
    }
  }
});
