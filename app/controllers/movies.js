import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  size: 10,
  actions: {
    prevPage(){
      if (this.get('page')>1) {
        this.set('page', (this.get('page')-1));
      }
    },
    nextPage(){
      this.set('page', (this.get('page')+1));
    }
  }
});
