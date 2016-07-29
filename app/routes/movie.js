import Ember from 'ember';

export default Ember.Route.extend({
  page: 1,
  size: 10,
  queryParams: {
    page: {
      refreshModel: true
    },
  },
  model: function(params) {
    var query = { page: params.page };
    return this.store.query('movie', query);
  },
});
