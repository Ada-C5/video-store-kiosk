import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,

  queue: [],

  activate () {
    window.scrollTo(0,0);
  },

  actions: {
    nextPage () {
      if (this.page + 1 <= 10) {
        this.set("page", (this.page + 1));
        this.activate()
        $('body').css('display', 'none');
        $('body').fadeIn(1100);
      }
    },

    prevPage () {
      if (this.page - 1 >= 1) {
        this.set("page", (this.page - 1));
        this.activate()
        $('body').css('display', 'none');
        $('body').fadeIn(1100);
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

    addMovie (imageFilename, event) {
      var textChange = $(event.target)
      var currentQueue = this.get('queue')

      if (!currentQueue.contains(imageFilename)) {
        textChange.animate({ opacity: 0 }, 400, function(){
          textChange.text("added!").animate({ opacity: 1 });
          textChange.animate({ opacity: 0 }, 400, function(){
            textChange.text("add to queue").animate({ opacity: 1 });
          })    
        })   
        $('.nothing-added').text('')
        currentQueue.pushObject(imageFilename)
        this.set('queue', currentQueue)
      } 
    },

    removeMovie (imageFilename, event) {
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
      $('.queue').text("add to queue")
      $('.nothing-added').text('nothing added yet!')
      this.set('queue', currentQueue)
    }
  }

});
