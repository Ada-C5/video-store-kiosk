import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return ['Movie 1', 'Movie 2', 'Movie 3', 'Movie 4', 'Movie 5',
  //   'Movie 6', 'Movie 7', 'Movie 8', 'Movie 9', 'Movie 10',
  //   'Movie 11', 'Movie 12', 'Movie 13', 'Movie 14', 'Movie 15',
  //   'Movie 16', 'Movie 17', 'Movie 18', 'Movie 19', 'Movie 20',
  //   'Movie 21', 'Movie 22', 'Movie 23'];
  // }

  model: function() {
    var page_num = this.controllerFor("movies").get("page")
    console.log(page_num)
    return this.store.findAll('movies', page_num);
  }

});
