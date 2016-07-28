
import Ember from 'ember';

export default Ember.Route.extend({


  model(params){
    return this.store.query('movie', {
        page: params.page,
        size: 10
      }
    );
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  },

});
