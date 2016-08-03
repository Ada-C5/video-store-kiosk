import Ember from 'ember';

export default Ember.Controller.extend({
  queue: [],
  page: 1,
  actions: {
    addToQueue(movie){
      let  q = this.get('queue')
      q.pushObject(movie)
      this.set('queue', q.uniq())
    },
    clearQueue(){
      this.set('queue', [])
    },
    next(){
      if (this.page + 1 <= 10) {
        this.set("page", (this.page + 1));
        // this.activate()
      }},
    prev(){
      if (this.page - 1 >= 1) {
        this.set("page", (this.page + 1));
        // this.activate()
      }
    }
  }
});

// showOverview(movieId) {
//   let q = this.get('model.movies').find(function (model) {return model.id === movieId})
//   q.set('selected', 'selected')
// }
//
// hideOverview
// ...
// q.set('selected', '')
