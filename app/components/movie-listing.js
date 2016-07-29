import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,

  actions: {
    openDetails() {
      var modal = document.getElementById('myModal');
      this.toggleProperty('isExpanded');
      modal.style.display = "block";
    },
    closeDetails() {
      var modal = document.getElementById('myModal');
      this.toggleProperty('isExpanded');
    },
    addToQueue() {
      
    }
  }
});
