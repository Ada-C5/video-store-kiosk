import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor("movies").get("page") }
    return this.store.query('movies', query)
  }


});
