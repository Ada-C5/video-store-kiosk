import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,

  actions: {
    openMovie() {
      var modal = document.getElementById('movieModal');
      this.toggleProperty('isExpanded');
      modal.style.display = "block";
    },

    closeMovie() {
      var modal = document.getElementById('movieModal');
      this.toggleProperty('isExpanded');
    },

    addToQueue(movie) {
      this.sendAction('addToQueue', movie);
      this.toggleProperty('isExpanded');
    }
  }
});
