import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor("movies").get("pageNumber") }
    return this.store.query('movies', query)
  },
  queryParams: {
    pageNumber: {
      refreshModel: true
    }
  }
});