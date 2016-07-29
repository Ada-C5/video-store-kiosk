import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var id = "Jaws"
    return this.store.findRecord('movies', id)
  },

});
