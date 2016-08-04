import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  queue: [],
  modalMovie: "",

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
    },
    resetQueue: function() {
      this.set('queue', []);
    },
    removeQueue: function(movie) {
      var remove = this.get('queue');
      var index = remove.indexOf(movie);
      if (index > -1) {
        remove.removeObject(movie);
        this.set('queue', remove);
      }
    },
    showModal: function(movie) { //set movie property to the component
      console.log("trying to open modal");
      this.set('modalMovie', movie); // this updates the modalMovie
      Ember.$("#myModal").modal(); // This opens the modal
    },
    removeModal: function() {
      this.disconnectOutlet({
        outlet: 'modal',
        parentView: 'application'
      });
    }
  }
});
