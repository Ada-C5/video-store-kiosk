import DS from 'ember-data';

export default DS.Adapter.extend({
  host: 'http://localhost:3000',
  findAll: function() {
    var url = this.host;
    // var query = { page: page };
    return new Ember.RSVP.Promise(function(resolve, reject) {
      Ember.$.getJSON(url).then(function(data) {
        Ember.run(null, resolve, data);
      }, function(jqXHR) {
        jqXHR.then = null; // tame jQuery's ill mannered promises
        Ember.run(null, reject, jqXHR);
      });
    });
  }
});
