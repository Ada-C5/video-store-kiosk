import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  queue: [],

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
    },
    addMovie(movie) {
     var queueArray = this.get('queue');
     queueArray.pushObject(movie);
     this.set('queue', queueArray.uniq());
   },
   removeMovie(movie) {
     var queueArray = this.get('queue');
     queueArray.removeObject(movie);
     this.set('queue', queueArray);
   },
   clearQueue() {
     var queueArray = this.get('queue');
     queueArray.clear();
     this.queueEmpty;
   }
  }
});
