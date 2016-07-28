import DS from 'ember-data';

export default DS.Adapter.extend({
  findAll: function(store, type, sinceToken) {
    var url = 'http://localhost:3000';
    // mental note to turn page into a variable
    // and associate it with a click handler on the buttons
    // var pageNumber = getPageNumber();
    var query = { since: sinceToken, page: 1 };
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