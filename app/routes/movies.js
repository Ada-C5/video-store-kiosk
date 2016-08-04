import Ember from 'ember';

export default Ember.Route.extend({

  ajax: Ember.inject.service(),
  model(params) {

    let page = params.page
    let pageNumber = page || 1
    return this.get('ajax').request('http://localhost:3000/?page=' + pageNumber + '&size=8')
    .then((movies)=>{ var queue = this.controllerFor('movies').get('queue')
        console.log(queue)
      return {q: queue, m: movies}
    })
    .catch(function(error){console.log("failed")})
  },

  queryParams:{
    page:{
      refreshModel: true
    }
  }
});
