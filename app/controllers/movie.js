import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  queue: [],

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
    },
    openModal: function(movie) {
      console.log("you are trying to open modal");
    },
    addQueue: function(movie) {
      var queueArray = this.get('queue');
      queueArray.pushObject(movie);
      this.set('queue', queueArray);
      console.log(queueArray);
    },
    resetQueue: function() {
      this.set('queue', [])
    }
  }
});
