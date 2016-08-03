
import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  size: 10,
  actions: {
    getNext(){
      this.set('page', (this.get('page')+1));

    },
    getPrev(){
      if (this.get('page')>1) {
        this.set('page', (this.get('page')-1));
      }
    }
    // getMovieInfo(){
    //   var $this = this.$()
    //   $this.hover(function() {
    //     console.log("hello");
    //   })
    // }

  }
});
