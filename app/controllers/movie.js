import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    unselect() {
      // hide the selectedmovie div
      ($('.selectedmovie').hide());
    },
    queue() {
      console.log("Add to Queue, Clear Outlet!")
    },
  }
});
