import Ember from 'ember';

export default Ember.Route.extend({
  page: 1,
  size: 10,
  queryParams: {
    page: {
      refreshModel: true
    },
  },
  queue: [],
  model: function(params) {
    var query = { page: params.page };
    return Ember.RSVP.hash({
      movies: this.store.query('movie', query),
      queue: this.queue
    })
  }
  actions: {
    openModal: function(movie) {
      this.render('components/movie-modal', {
        into: "application",
        outlet: "modal",
        movie: movie
      });
    }
  }
});
