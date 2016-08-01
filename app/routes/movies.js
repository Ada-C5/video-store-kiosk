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
  // },
  // actions: {
  //    edit: function() {
  //      return this.render('editmodal', { into: 'movie-selected', outlet: 'md' });
  //    },

  //    close: function() {
  //      return this.render('nothing', { into: 'movie-selected', outlet: 'md' });
  //   }  
  // }
});

// 
// application Route
// model(params){
//  return this.store.query('movie', { page: 1}).then(function(movies){
//     return {page: 1, movies: movies}
//  })
// }

// route has a lot more responsibility in ember 
// the controller and template have this data by default 
// this is where the data comes from 
// this stuff is LITERALLY called model 
// 'movie' on line 29 references the models movie in the app directory