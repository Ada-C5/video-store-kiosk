import DS from 'ember-data';

export default DS.RESTAdapter.extend({
  findAll: function(store, page_num, type, sinceToken) {
    var url = "http://localhost:3000/";
    var query = { since: sinceToken , page: page_num };

    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, query).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null;
        Ember.run(null, reject, jqXHR);
      });
    });
  },

});
