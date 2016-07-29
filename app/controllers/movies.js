import Ember from 'ember';

export default Ember.Controller.extend({
  pageNumber: 1, 
  atTheEnd: false,

  actions: {
    clickNext() {
      if (this.atTheEnd === false) {  
        this.set("pageNumber", (this.pageNumber+1));
      }
    },
    clickPrev() { 
      if (this.pageNumber === 1) {
        return; 
      }
      this.atTheEnd = false,
      this.set("pageNumber", (this.pageNumber-1));
    },
  }
});
