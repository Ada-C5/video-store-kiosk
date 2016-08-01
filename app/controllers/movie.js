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
      // console.log(this.get('queue'))
      this.set("queue", this.get("queue").addObject(movieTitle))
      console.log(this.get("queue"))

      // generate li element from queue items?
      var listItem = document.createElement("LI")
      var listText = document.createTextNode(movieTitle)
      listItem.appendChild(listText)
      document.getElementById("queue-list").appendChild(listItem)
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
