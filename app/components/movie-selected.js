import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleDetails() {
      this.toggleProperty('isExpanded');
    },
    addToQueue(movie) {
      this.sendAction('addToQueue', movie);
      this.toggleProperty('isExpanded');
    }
  }
});