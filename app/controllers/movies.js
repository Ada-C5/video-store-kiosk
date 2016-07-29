import Ember from 'ember';

export default Ember.Controller.extend({
  // pageNumber: 1, 
  page: 1,
  // atTheEnd: false,

  actions: {
    clickNext() {
    	console.log("NEXT!!!")
      // if (this.atTheEnd === false) {  

      // };
      this.page += 1;
      // this.send('saveModel');
    },

  clickPrev() { 
      // if (this.offSet === 10) {
      //   return; 
      // };
      // this.atTheEnd = false,
      this.page -= 1;
      // this.send('saveModel');
      // return this.store.findAll('movies', this.page);

  },
  //   getMovies() {

  //     Adapter.query();
  //   }
  // }
});
// Ember.set()
      // this.set('model.name', newName);
      // this.send('saveModel');