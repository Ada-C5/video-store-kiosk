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
      // this is the action that was defined in the template and sent from the component file. here we are pushing the movie into the array
      // we use pushObject bc this is not a native js array, its some kind of weird ember thing and ember doesnt know about .push,but it does know about pushObject
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
