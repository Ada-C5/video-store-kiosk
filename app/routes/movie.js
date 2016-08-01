import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    // show the hidden selectedmovie div
    ($('.selectedmovie').show());
    var id = params.movie_title
    return this.store.findRecord('movies', id)
  },

});
