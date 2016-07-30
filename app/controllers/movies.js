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
        this.set('page', this.page - 1)
      }
    },
    addMovie(movie) {
      var queueArray = this.get('queue');
      queueArray.pushObject(movie);
      this.set('queue', queueArray);
      console.log(movie);
    }
  }
});
