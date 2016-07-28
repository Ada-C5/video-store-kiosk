import Ember from 'ember';

export default Ember.Controller.extend({
  pageNumber: 1, 
  atTheEnd: false,

  actions: {
    clickNext() {
      if (this.atTheEnd === false) {  
        this.pageNumber += 1
        console.log(this.pageNumber)
        console.log('this:' + this) 
      }
    },
    clickPrev() { 
      if (this.pageNumber === 1) {
        return; 
      }
      this.atTheEnd = false,
      this.pageNumber -= 1
      console.log(this.pageNumber)
    },
    getMovies() {
      // Adapter Magic Goes Here
      Adapter.query();
    }
  }
});
