import Ember from 'ember';

export default Ember.Route.extend({
  // model() {
  //   return this.store.findAll('movie');
    // console.log(this.store)
  // model: function() {
  //   var query = { page: this.controllerFor('movies').get('page') }
  //   return this.store.query('movie', query)
  //  },

  queryParams: {
     page: {
       refreshModel: true
     }
   },

  model(params) {
    return this.store.query('movie', {
      page: params.page,
      size: 10
    });
  }
 // });
});
