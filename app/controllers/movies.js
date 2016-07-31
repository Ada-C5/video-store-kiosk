import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  queue: [],
  // displayTitle: "",
  actions: {
    select(title, overview, img){
      var modal = document.getElementById('myModal');
      // var modal = document.getElementsByClassName('modal-content')
      this.set('displayTitle', title)
      this.set('displayOverview', overview)
      this.set('displayImg', img)
      modal.style.display = "block"
    },
    close(){
      var modal = document.getElementById('myModal');
      modal.style.display = "none"
    },

    queues(movie){
      var queueArray = this.get('queue')
      queueArray.pushObject(movie)
      this.set('queue', queueArray)
    },

    closequeue(movie, index) {
      var queueArray = this.get('queue')
      console.log("movie", movie)
      queueArray.removeObject(movie)
      // var close = document.getElementByClassName('queueclose')[0];
      // console.log(close)
      // close.style.display = "none"
    },

    prev() {
      if (this.page !== 1) {
        this.set('page', this.page-1)
      }
    },
    next(){
      if (this.page !== 10) {
        this.set('page', this.page+1)
      }
    }
  }
});
