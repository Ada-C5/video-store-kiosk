import Ember from 'ember';

export default Ember.Controller.extend({

  page: 0,
  addToQueue: true,
  moreInfo: true,

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

    moreInfo(movieId){
    let idm = this.model.find(function(model){return model.id == movieId})
    console.log(id)
      id.set('selected', true)
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
