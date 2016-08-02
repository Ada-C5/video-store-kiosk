import Ember from 'ember';

export default Ember.Controller.extend({
  selected: true,
  actions: {
    unselect: function() {
      this.transitionToRoute('movies');
    },
    queue(movie) {
      console.log(movie)
      var img_link = "<img src=" + "http://localhost:3000/images/posters/" + movie + " " + "class=" + "queueimg" + ">"
      $('.navbar-text').append(img_link)
    },
  }
});
