import Ember from 'ember';

export default Ember.Controller.extend({
  selected: true,
  queue: [],

  actions: {
    unselect: function() {
      this.transitionToRoute('movies');
    },
    addtoqueue(movie) {
      var img_link = movie
      this.get('queue').pushObject(img_link)
    }
  }
});
