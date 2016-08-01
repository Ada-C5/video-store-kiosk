import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    var query = { page: this.controllerFor("movies").get("page") }
    return this.store.query('movies', query)
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  }

});



// import Ember from 'ember';
//
// export default Ember.Route.extend({
//   queryParams: {
//     page: {
//       refreshModel: true
//     }
//   },
//
//   model(params) {
//     return this.store.query('movie', {
//       page: params.page,
//       size: 10
//     });
//   }
// });

// import Ember from 'ember';
//
//
// export default Ember.Route.extend({
//   model() {
//     return ['Harry Potter', 'Lord of the Rings', 'Coraline', 'The Lion King', 'Star Wars', 'Mirror Mask', 'The Secret Garden'];
//   }
// });


// ember data is the active record you use to connect with this.store
