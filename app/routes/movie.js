import Ember from 'ember';

export default Ember.Route.extend({

  ajax: Ember.inject.service(),
  model(params) {
    let title = params.movie_title
    //let pageNumber = title || 1
    return this.get('ajax').request('http://localhost:3000/title/' + title);
  },

  queryParams:{
    title:{
      refreshModel: true
    }
  }
});
