import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  title: "",
  queue: [],

  actions: {
    nextPage() {
      if (this.page < 10) {
        this.set("page", (this.page+1));
      }
    },

    previousPage() {
      if (this.page > 1) {
        this.set("page", (this.page-1));
      }
    },

    addToQueue(movieTitle) {
      // take movie and push into queue array
      this.set("model.q", this.get("model.q").addObject(movieTitle))
    },

    removeFromQueue(movieTitle) {
      console.log(this.get("model.q"))
      this.set("model.q", this.get("model.q").removeObject(movieTitle))
      console.log(this.get("model.q"))
    }
  }
});
