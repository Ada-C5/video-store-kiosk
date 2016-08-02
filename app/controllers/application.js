import Ember from 'ember';

export default Ember.Controller.extend({
  queue: [],
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
    addToQueue(movie) {
      let current = this.get('queue')
      current.pushObject(movie)
      this.set('queue', current.uniq())
      // console.log("current", current)
      // console.log('queue', this.get('queue'))
    }
  }
});

// jeremy's
// nextPage: Ember.computed('model.page', function() {
//   return this.get('model.page' + 1)
// })
