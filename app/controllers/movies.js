import Ember from 'ember';

export default Ember.Controller.extend({
  pageNumber: 1, 
  queue: [],
  actions: {
    clickNext() {
      if (this.pageNumber < 10) {  
        this.set("pageNumber", (this.pageNumber + 1));
      }
    },
    clickPrev() { 
      if (this.pageNumber === 1) {
        return; 
      }
      this.set("pageNumber", (this.pageNumber - 1));
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
    }
  }
});


// an action is a hook with the user to interact with this data 