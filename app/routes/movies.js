import Ember from 'ember';

export default Ember.Route.extend({
	// hooks to model and returns all from API call
  model: function() { 
    return this.store.findAll('movies');
  }


  // pagination: 
   model: function(params) {
    return this.store.query('movies', { page: {
        number: params.page,
        size: params.size
      }
    });
  },

  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }
});