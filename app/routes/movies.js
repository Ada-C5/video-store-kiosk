import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor("movies").get("page") }
    return this.store.query('movies', query)
    .then((movies)=> {
      var queue = this.controllerFor('movie').get('queue')
      console.log(queue)
      return { q: queue, m: movies }
    })
    .catch(function (error) { console.log("Failed to load movies") })
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  },

});
