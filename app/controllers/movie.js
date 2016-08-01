import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    unselect() {
      console.log("Clear Outlet!")
      console.log($('.selectedmovie').empty());
    },
    queue() {
      console.log("Add to Queue, Clear Outlet!")
    },
  }
});
