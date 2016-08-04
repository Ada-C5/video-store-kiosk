import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 12,
  queueArray: Ember.A([]),
  showArray: Ember.A([]),
  actions: {
    nextPage: function() {
      if (this.page <10) {
        this.set('page', this.page+1);
      }
    },

    previousPage: function() {
      if (this.page >1) {
        this.set('page', this.page-1);
      }
    },

    addMovie: function(movie) {
      if (this.queueArray.includes(movie) !== true) {
      this.queueArray.pushObject(movie);
      }
    },

    removeMovie: function(movie) {
      this.get('queueArray').removeObject(movie);
    },

    clearQueue(){
      (this.queueArray).set("[]");
    }
  }
});
