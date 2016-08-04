import Ember from 'ember';

export default Ember.Controller.extend({
  queue: [],
  page: 1,
  actions: {
    addToQueue(movie){
      let  q = this.queue
      q.pushObject(movie)
      this.set('queue', q.uniq())
      console.log(q)
    },
    clearQueue(){
      this.set('queue', [])
    },
    next(){
      if (this.page + 1 <= 10) {
        this.set("page", (this.page + 1));
      }},
    prev(){
      if (this.page - 1 >= 1) {
        this.set("page", (this.page + 1));
      }
    },
    changeClass() {Ember.on('click', function () {
      this.toggleProperty('isActive');
      })
    }}
});
