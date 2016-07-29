import Ember from 'ember';

export default Ember.Controller.extend({

  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  queue: [],
  actions: {
    select(title, overview, img){
      var modal = document.getElementById('myModal');
      // var modal = document.getElementsByClassName('modal-content')
      console.log("title", modal)
      this.set('displayTitle', title)
      this.set('displayOverview', overview)
      this.set('displayImg', img)
      modal.style.display = "block"
    },
    close(){
      var modal = document.getElementById('myModal');
      modal.style.display = "none"
    },
    queue(movie){

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
