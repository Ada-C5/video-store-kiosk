
import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  size: 10,
  queueArray: Ember.A([]),
  actions: {
    getNext(){
      this.set('page', (this.get('page')+1));

    },
    getPrev(){
      if (this.get('page')>1) {
        this.set('page', (this.get('page')-1));
      }
    },

    addToQueue(title){
      this.queueArray.pushObject(title);
      console.log(this.queueArray);
      console.log(this.queueArray.length);
    },

    clearQueue(){
      (this.queueArray).set("[]");
      console.log(this.queueArray.length);
    }

  }
});
