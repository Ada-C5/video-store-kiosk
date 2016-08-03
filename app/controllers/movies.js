import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,

  actions: {
    deleteQueue() {
      $('.navbar-text').empty()
    },

    deleteFromQueue(movie) {
      this.set("model.q", this.get("model.q").removeObject(movie))
    },

    nextPage() {
      if (this.page + 1 <= 10) {
        this.transitionToRoute('movies');
        this.set("page", (this.page+1));
      }
    },

    previousPage() {
      if (this.page - 1 >= 1) {
        this.transitionToRoute('movies');
        this.set("page", (this.page-1));
      }
    }
  }
});
