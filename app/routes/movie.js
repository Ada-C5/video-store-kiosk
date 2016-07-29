import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var query = { page: params.page };
    return this.store.query('movie', query);
  },
  page: 1,
  size: 10,
  queryParams: {
    page: {
      refreshModel: true
    },
  }
});
