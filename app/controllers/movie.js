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
    addQueue: function(movie) {
      var queueArray = this.get('queue');
      queueArray.pushObject(movie);
      this.set('queue', queueArray);
      console.log("queue array ",queueArray);
    },
    resetQueue: function() {
      this.set('queue', []);
    },
    removeQueue: function(movie) {
      var remove = this.get('queue');
      var index = remove.indexOf(movie);
      if (index > -1) {
        remove.splice(index, 1);
        this.set('queue', remove);
        console.log("removing stuff ", remove);
      }
    },
    openModal: function(movie) {
      console.log(movie);
      console.log("you are trying to open modal");
    }
  }
});
