// import Ember from 'ember';
import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(store, type, page) {
    // var url = 'http://localhost:3000/?page=' + page + '&size=5';
    var url = 'http://localhost:3000/';
    // console.log("QQQQQ" + q.limit)
    // var query = {};
    var page = {page: page};
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, page).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }


//   curl http://localhost:3000?size=1
// vs curl http://localhost:3000?page=2
// /?page=2&size=10
  // findNext: function(store) {
  //   var url = 'http://localhost:3000/?page=2&size=5';
  //   var query = {};
  //   return new Ember.RSVP.Promise(function(resolve, reject) {
  //     Ember.$.getJSON(url, query).then(function(data) {
  //       Ember.run(null, resolve, data);
  //     }, function(jqXHR) {
  //       jqXHR.then = null; // tame jQuery's ill mannered promises
  //       Ember.run(null, reject, jqXHR);
  //     });
  //   });
  // }
});