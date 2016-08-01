import Ember from 'ember';

export default Ember.Controller.extend({
  selected: true,
  actions: {
    unselect: function() {
      this.transitionToRoute('movies');
    },
    queue() {
      console.log("Add to Queue, Clear Outlet!")
    },
  }
});
