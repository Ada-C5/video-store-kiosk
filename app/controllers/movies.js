import Ember from 'ember';

export default Ember.Controller.extend({
 queryParams: ['page', 'size'],
 page: 1,
 size: 10,
 queue: [],
 actions: {
    pageForward() {
      if (this.page < 10) {
        let nextPage = this.page + 1;
        this.set("page", nextPage);
      }
    },

    pageBack() {
      let prevPage;
      if (this.page === 1) {
        prevPage = 1;
      } else {
        prevPage = this.page - 1;
      }
      this.set("page", (prevPage));
    },

    addMovie(movie) {
      let current_queue = this.get("queue");
      current_queue.pushObject(movie)
      this.set("queue", current_queue.uniq())
    },

    deleteFromQueue(movie) {
      let current_queue = this.get("queue");
      current_queue.removeObject(movie)
      this.set("queue", current_queue.uniq())
    }
  }
});
