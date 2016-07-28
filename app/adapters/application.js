import DS from 'ember-data';

export default DS.Adapter.extend({

  query: function(store, type, page) {
    console.log('hey bro you hit the adapter')
    var url = "http://localhost:3000";
    // mental note to turn page into a variable
    var page = {page: 2}
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url, page).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});