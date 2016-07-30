import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  actions: {
    toggleDetails() {
      this.toggleProperty('isExpanded');
    },
    closeDetails() {
      var modal = document.getElementById('myModal');
      this.toggleProperty('isExpanded');
    },
    addToQueue() {
      
    }
  }
});
