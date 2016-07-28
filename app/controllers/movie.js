import Ember from 'ember';
// import DS from 'ember-data'

export default Ember.Controller.extend({
  page: 1,

  actions: {
    nextPage() {
      if (this.page < 10) {
        this.set("page", (this.page+1));
      }
    },

    previousPage() {
      if (this.page > 1) {
        this.set("page", (this.page-1));
      }
    }
  }
});
