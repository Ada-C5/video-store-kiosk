import Ember from 'ember';

export default Ember.Component.extend({

  collapsed: false,

  actions: {
    collapse() {
      this.toggleProperty('collapsed');
    }
  }
});
