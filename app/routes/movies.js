import Ember from 'ember';
//
export default Ember.Route.extend({

  model(params) {
    return this.store.query('movie',
    {
      page: params.page,
      size: params.size
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
