import Ember from 'ember';

export default Ember.Controller.extend({

  page: 0,
  queue: [],






  ajax: Ember.inject.service(),
  actions: {
    nextTen() {
    let nexTen = this.page + 1
     this.set('page', nexTen)
    },

    previousTen() {
      let prevTen = this.page - 1
      this.set('page', prevTen )
    },


    enQueue(title){
       this.set('model.q', this.get('model.q').addObject(title))
      console.log(this.get('model.q'))
    },

    deQueue(title){
      this.set('model.q', this.get('model.q').removeObject(title))

    },

    toggleDetails(){
      this.toggleProperty('isExpanded')
    },

    clearQueue(){
      this.queue.clear()
    }


  }

});
