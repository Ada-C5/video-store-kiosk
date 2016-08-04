import Ember from 'ember';

export default Ember.Route.extend({
 
   model: function (params) {
    var apiURL = "http://localhost:3000/";
    var query = { page: params.page };
    return Ember.$.getJSON(apiURL, query).then(function (movieData, query){
      return movieData;
    })
  },

  queryParams: {
    page: {
      refreshModel: true
    }
  },

  
});


