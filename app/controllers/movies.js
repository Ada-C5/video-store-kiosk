import Ember from 'ember';

export default Ember.Controller.extend({

  page: 0,
  queue: [],





  //Ember.compute('model.moreInfo')//this is the


  ajax: Ember.inject.service(),
  actions: {
    nextTen() {
    let nexTen = this.page + 1
     this.set('page', nexTen)
    },

    previousTen() {
      let prevTen = this.page - 1
      this.set('page', prevTen )
    },


    enQueue(){
    

    }




  }

});













// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   actions: {
//     nextTen: function(){
//
//
//     }
//
//     previousTen: function(){
//
//     }
//
//   }
//
// });
