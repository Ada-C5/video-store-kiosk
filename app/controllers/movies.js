import Ember from 'ember';

export default Ember.Controller.extend({
  pageNumber: 1, 
  atTheEnd: false,

  actions: {
    clickNext() {
      if (this.atTheEnd === false) {  
      this.pageNumber += 1
      console.log(this.pageNumber)
      // getMovies() something like this
      }
    },
    clickPrev() { 
      if (this.pageNumber === 1) {
        return; 
      }
      this.atTheEnd = false,
      this.pageNumber -= 1
      console.log(this.pageNumber)
      // getMovies()
    },
    getMovies() {
      // Adapter Magic Goes Here
    }
  }
});
