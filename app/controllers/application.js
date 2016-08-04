import Ember from 'ember';

export default Ember.Controller.extend({
  displayQueue: false,
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
      this.set('displayQueue', true)
    },
    deleteFromQueue(movie) {
      let current = this.get('queue')
      current.removeObject(movie)
      this.set('queue', current.uniq())
      length = this.get('queue').length
      if (length === 0) {
        this.set('displayQueue', false)
      }
    },
    clearQueue() {
      let current = []
      this.set('queue', current)
      length = this.get('queue').length
      if (length === 0) {
        this.set('displayQueue', false)
      }
    }

  }
});
