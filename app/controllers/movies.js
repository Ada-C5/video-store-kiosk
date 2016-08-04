import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  queue: [],
  actions: {
    nextPage(){
      if (this.page < 10) {
        this.set('page', this.page + 1);
      }
    },
    prevPage(){
      if (this.page > 1) {
        this.set('page', this.page - 1);
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
    }
  }
});


// JEREMY'S CODE:
//nextPage: Ember.computed('model.page', function() {
//   return this.get('model.page') + 1
// })
