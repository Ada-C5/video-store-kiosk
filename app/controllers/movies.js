import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  actions: {
    nextPage: function() {
      if (this.page <10) {
        this.set('page', 'page'+1);
      }
    },

    previousPage: function() {
      if (this.page >1) {
        this.set('page', 'page'-1);
      }
    }
  }
});
