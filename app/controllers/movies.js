import Ember from 'ember';

export default Ember.Controller.extend({

  page: 0,
  addToQueue: true,
  moreInfo: true,
  selected: true,


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

    moreInfo(movie){
      this.set('selected',true)
      console.log(movie)

      //let movie = this.model.find(function(model){return model.id == movieId})
      //this.toggleProperty('selected', true)
      //console.log(id)
      //this.toggleProperty('selected');
      //console.log(this.id.overview)
      //this.selected
    //let id = this.model.find(function(model){return model.id == movieId})
    //console.log(this.toggleProperty('selected'))

    //console.log(id)
    //this.set('selected',)
    //id.overview.set('selected', true)
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
