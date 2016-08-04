import DS from 'ember-data';

export default DS.Adapter.extend({

  query: function(store, type, query) {
    var url = "http://localhost:3000/";
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, query).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null;
        Ember.run(null, reject, jqXHR);
      });
    });
  },

  findRecord: function(store, type, id, snapshot) {
   var url = ["http://localhost:3000/title", id].join('/');

   return new Ember.RSVP.Promise(function(resolve, reject) {
     Ember.$.getJSON(url).then(function(data) {
       Ember.run(null, resolve, data);
     }, function(jqXHR) {
       jqXHR.then = null; 
       Ember.run(null, reject, jqXHR);
     });
   });
 }

});
