
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
    },

    clearQueue(){
      (this.queueArray).set("[]");
    },

    removeFromQueue(title){
      this.get('queueArray').removeObject(title);
      console.log(title);
    }

  }
});
