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
    },
    deleteFromQueue(movie) {
      let current = this.get('queue')
      current.removeObject(movie)
      this.set('queue', current.uniq())
      console.log(current)
    },
    clearQueue() {
      let current = []
      this.set('queue', current)
    }
  }
});
