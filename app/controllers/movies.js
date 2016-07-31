import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,

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

    
  }


});
