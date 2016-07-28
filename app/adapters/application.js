import DS from 'ember-data';

export default DS.Adapter.extend({

  query: function(store, type, query) {
    var url = 'http://localhost:3000/';
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, query).then(function(data) {
        // console.log(query);
        Ember.run(null, resolve, data);
        // console.log(JSON.stringify(data));
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }

});
