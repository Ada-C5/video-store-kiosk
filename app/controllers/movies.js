import Ember from 'ember';

export default Ember.Controller.extend({
  pageNumber: 1, 
  showMyModal: false,
  // atTheEnd: false,

  actions: {
    clickNext() {
      // if (this.atTheEnd === false)
      if (this.pageNumber <= 10) {  
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
    showInfo() {
      console.log('hi')
    },
    toggleShow() {
        this.set('showMyModal', !this.get('showMyModal'));
    }
  }
});


// an action is a hook with the user to interact with this data 