import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: 'page',
  page: 1,

  actions: {
    clickNext() {
      this.set('page', this.get('page') + 1);
    },

  	clickPrev() {
      this.set('page', this.get('page') - 1);
  	},
  }
});