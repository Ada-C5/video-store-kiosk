import Ember from 'ember';

export default Ember.Controller.extend({
  queue: ['taco', 'face'],
  page: 1,
  actions: {
    getPrev() {
        if (this.page > 1) {
          this.set('page', (this.page - 1))
        }
    },
    getNext() {
      if (this.page < 10) {
        this.set('page', (this.page + 1))
      }
    },
    addToQueue(){
      console.log('trying to add to queue')
    }
  }
});

// jeremy's
// nextPage: Ember.computed('model.page', function() {
//   return this.get('model.page' + 1)
// })
