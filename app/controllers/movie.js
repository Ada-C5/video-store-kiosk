import Ember from 'ember';

export default Ember.Controller.extend({
  queue: [],

  actions: {
    unselect: function() {
      this.transitionToRoute('movies');
    },

    addtoqueue(movie) {
      var img_link = movie
      if (this.get('queue').includes(img_link) === false) {
        this.get('queue').pushObject(img_link)
      }
      this.transitionToRoute('movies');
    }
  }
});
