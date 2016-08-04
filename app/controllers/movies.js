import Ember from 'ember';

// var { computed, get } = Ember;

export default Ember.Controller.extend({
  queryParams: 'page',
  page: 1,
  // selectedMovies        : Ember.A([]),
  // remainingMovies       : computed.setDiff('model', 'selectedMovies'),
  // remainingMoviesLength : computed.alias('remainingMovies.length'),

  actions: {
    clickNext() {
      this.set('page', this.get('page') + 1);
    },

    clickPrev() {
      this.set('page', this.get('page') - 1);
    },


    // addMovie(id) {
    //   console.log("HIII!")
    //   var selectedMovies = get(this, 'selectedMovies');
    //   var movie          = get(this, 'model').findBy('id', parseInt(id));

    //   if (!selectedMovies.contains(movie)) {
    //     selectedMovies.pushObject(movie);
    //   }
    // },

    // addAllMovies() {
    //   var remainingMovies = get(this, 'remainingMovies')
    //   return get(this, 'selectedMovies').pushObjects(remainingMovies);
    // }
  }







  // actions: {
  // }
});