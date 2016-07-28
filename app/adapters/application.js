// import DS from 'ember-data';

// export default DS.Adapter.extend({
  // findAll: function(store, type, sinceToken) {
  //   var url = 'http://localhost:3000';
  //   var query = { since: sinceToken };
  //   return new Ember.RSVP.Promise(function(resolve, reject) {
  //     Ember.$.getJSON(url, query).then(function(data) {
  //       Ember.run(null, resolve, data);
  //     }, function(jqXHR) {
  //       jqXHR.then = null; // tame jQuery's ill mannered promises
  //       Ember.run(null, reject, jqXHR);
  //     });
  //   });
  // }
  // /?page=2&size=10
  //
  // findRecord: function(store, type, sinceToken) {
  //   var url = 'http://localhost:3000/images/posters/12-angry-men.jpg';
  //   var query = { since: sinceToken };
  //   return new Ember.RSVP.Promise(function(resolve, reject) {
  //     Ember.$.getJSON(url, query).then(function(data) {
  //       Ember.run(null, resolve, data);
  //     }, function(jqXHR) {
  //       jqXHR.then = null; // tame jQuery's ill mannered promises
  //       Ember.run(null, reject, jqXHR);
  //     });
  //   });
  // }
// });
//
// import JSONAPIAdapter from 'ember-data/adapters/json-api';
//
// export default JSONAPIAdapter.extend({
//   host: 'http://localhost:3000'
//   // Application specific overrides go here
// });


import DS from 'ember-data';

export default DS.Adapter.extend({
 host: 'http://localhost:3000/',
 query: function(store, type, query) {
   var url = this.host;
    // + '?size=10';
   return new Ember.RSVP.Promise(function(resolve, reject) {
     Ember.$.getJSON(url, query).then(function(data) {
       Ember.run(null, resolve, data);
     }, function(jqXHR) {
       jqXHR.then = null; // tame jQuery's ill mannered promises
       Ember.run(null, reject, jqXHR);
     });
   });
 }
});
