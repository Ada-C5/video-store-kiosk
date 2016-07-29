import DS from 'ember-data';

export default DS.Adapter.extend({
  query: function(store, type, page) {
    var baseUrl = "http://localhost:3000";
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(baseUrl, page).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});