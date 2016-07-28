
import Ember from 'ember';

export default Ember.Route.extend({
    // model(){
    // return this.store.findAll('movie')
    // return this.store.find('movie.title', "Jaws")
  // },
  model(params){
    return this.store.query('movie', {
        page: params.page,
        size: 10
      }
    );
  },

  // model(params) {
  //   return this.store.query('article', { page: {
  //       number: params.page,
  //       size: params.size
  //     }
  //   });
  // },
  //
  queryParams: {
    page: {
      refreshModel: true
    },
    size: {
      refreshModel: true
    }
  }

});
