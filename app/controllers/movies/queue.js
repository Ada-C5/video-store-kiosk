import Ember from 'ember';

var { computed, get } = Ember;

export default Ember.Controller.extend({

	selectedMovies        : Ember.A([]),
  remainingMovies       : computed.setDiff('model', 'selectedMovies'),
  remainingMoviesLength : computed.alias('remainingMovies.length'),

	actions: {
    addMovie(id) {
      console.log("HI")
      var selectedMovies = get(this, 'selectedMovies');
      console.log(id)
      var movie          = this.store.findRecord('movies', parseInt(id));
      console.log(movie.id)

      if (!selectedMovies.contains(movie)) {
        selectedMovies.pushObject(movie);
      }
      console.log(selectedMovies)
    },
  }
});
