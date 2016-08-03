import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor("movies").get("page") }
    return this.store.query('movies', query)
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  actions: {
   boop: function() {
     var hello = this.controllerFor('movie').get('test')
     alert(hello);
   }
 }

});
//
// var query = { page: this.controllerFor('movie').get('page') }
// // console.log(this.store.query('movie', query))
// return this.store.query('movie', query)
// .then((movies)=> {
//   var queue = this.controllerFor('movie').get('queue')
//   // console.log(movies)
//   console.log(queue)
//   return { q: queue, m: movies }
// })
// .catch(function (error) { console.log("Failed to load movies") })
