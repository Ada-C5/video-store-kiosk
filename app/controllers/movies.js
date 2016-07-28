import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,

  actions: {
    nextPage() {
      if (this.page + 1 <= 10) {
        this.set("page", (this.page+1));
      }
    },
    previousPage() {
      if (this.page - 1 >= 1) {
        this.set("page", (this.page-1));
      }
    }
  }
});
