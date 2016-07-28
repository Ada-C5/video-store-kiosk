import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor('movie').get('page') }
    return this.store.query('movie', query)
  },

  queryParams: {
    page: {
      refreshModel: true
    },

    title: {
      refreshModel: true
    }
  }

});
