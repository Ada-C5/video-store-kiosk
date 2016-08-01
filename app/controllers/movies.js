import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,

  queue: [],

  queueParams: ["queuePage", "queuePerPage"],

  activate () {
    window.scrollTo(0,0);
  },

  actions: {
    nextPage () {
      if (this.page + 1 <= 10) {
        this.set("page", (this.page + 1));
        this.activate()
      }
    },

    prevPage () {
      if (this.page - 1 >= 1) {
        this.set("page", (this.page - 1));
        this.activate()
      }
    },

    selectMovie (title, overview){
      var popup = document.getElementById('popup1');
      this.set('displayTitle', title)
      this.set('displayOverview', overview)
      popup.style.display = "block"
    },

    closeMovie () {
      var popup = document.getElementById('popup1');
      popup.style.display = "none"
    }, 

    addMovie (imageFilename) {
      var currentQueue = this.get('queue')
      if (!currentQueue.contains(imageFilename)) {
        $('.nothing-added').text('')
        currentQueue.pushObject(imageFilename)
        this.set('queue', currentQueue)
      } 
    },

    removeMovie (imageFilename) {
      var currentQueue = this.get('queue')
      if (currentQueue.contains(imageFilename)) {
        currentQueue.removeObject(imageFilename)
        this.set('queue', currentQueue)
        if (currentQueue.length === 0) { $('.nothing-added').text('nothing added yet!') }
      } 
    },

    clearQueue () {
      var currentQueue = this.get('queue')
      currentQueue.clear()
      this.set('queue', currentQueue)
    }
  }

});
