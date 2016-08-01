import Ember from 'ember';

export default Ember.Controller.extend({
  selected: true,
  actions: {
    unselect: function() {
      // hide the selectedmovie div
      // ($('.selectedmovie').hide());
      console.log("I'm in the movie controller")
      // this below needs to be passed a new Model
      // this.transitionToRoute('movie', newModel);
      this.send("sessionChanged");
      this.set("selected", false)
    },
    queue() {
      console.log("Add to Queue, Clear Outlet!")
    },
  }
});
