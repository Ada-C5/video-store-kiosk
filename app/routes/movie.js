import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor('movie').get('page') }
    // console.log(this.store.query('movie', query))
    return this.store.query('movie', query)
    .then((movies)=> {
      var queue = { queue: this.controllerFor('movie').get('queue') }
      // console.log(movies)
      console.log(queue)
      return { q: queue, m: movies }
    })
    .catch(function (error) { console.log("Failed to load movies") })
  },

  // still don't really understand what this does...
  queryParams: {
    page: {
      refreshModel: true
    },

    title: {
      refreshModel: true
    }

    // queue: {
    //   refreshModel: true
    // }
  }

});
