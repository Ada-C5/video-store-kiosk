import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  title: "",

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

    showMovie(movieTitle) {
      this.set("title", movieTitle)
    }

    // showDescription(movieId) {
    //   var mod = this.get('model').find(function (model) {return model.id === movieId })
    //   mod.set('selected', true)
    // },
    //
    // noDescription(movieId) {
    //   var mod = this.get('model').find(function (model) {return model.id === movieId })
    //   mod.set('selected', false)
    // }
  }
});
