import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,

  actions: {
    toggleBody() {
      this.toggleProperty('isExpanded');
    }
  }
});
