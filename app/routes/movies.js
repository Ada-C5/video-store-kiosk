import Ember from 'ember';

export default Ember.Route.extend({

  ajax: Ember.inject.service(),
  model(params) {
    
    let page = params.page
    let pageNumber = page || 1
    return this.get('ajax').request('http://localhost:3000/?page=' + pageNumber + '&size=10');
  },

  queryParams:{
    page:{
      refreshModel: true
    }
  }
});
