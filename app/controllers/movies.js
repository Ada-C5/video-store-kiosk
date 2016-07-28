import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  actions: {
    prev() {
      if (this.page !== 1) {
        this.set('page', this.page-1)
      }
    },
    next(){
      if (this.page !== 10) {
        this.set('page', this.page+1)
      }
    }
  }
});
