// import Ember from 'ember';

// export default Ember.Route.extend({
// 	// hooks to model and returns all from API call
//   model: function() { 
//     return this.store.findAll('movies');
//   }

 

import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor("movies").get("page") }
    return this.store.findAll('movies')
  },
  queryParams: {
    page: {
      refreshModel: true
    }
  }
});




  // PAGINATION::::::the shit
  // model: function(params) {
  // 	// send page num as where to start return API data
  //   return this.store.findNext('movies'
  //   	// , { page: {
  //    //    number: params.page      }
  //   // }
  //   );
  // },

  // queryParams: {
  //   page: {
  //     refreshModel: true
  //   }
  // }
// });