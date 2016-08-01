import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // show the hidden selectedmovie div
    ($('.selectedmovie').show());
    var id = params.movie_title
    return this.store.findRecord('movies', id)
    // maybe turn this into a movie instead of "movies" record so boolean can be added
  },
  queryParams: {
    selected: {
      refreshModel: true
    }
  },
  actions: {
    sessionChanged: function() {
      console.log("I'm in the route!")
      this.refresh();
    }
  }
});
