import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,

  actions: {
    nextPage() {
      if (this.page + 1 <= 10) {
        this.set('page', (this.page + 1));
      }
    },
    prevPage() {
      if (this.page - 1 >= 1) {
        this.set('page', (this.page - 1));
      }
    }
  }
});
