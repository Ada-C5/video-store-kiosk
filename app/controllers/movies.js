import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,

  actions: {
    nextPage() {
      this.set("page", (this.page+1));
    },
    previousPage() {
      this.set("page", (this.page-1));
    }
  }
});
