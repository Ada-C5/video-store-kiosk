import Ember from 'ember';

export default Ember.Controller.extend({
  page: 0,
  moreInfo: true,
  addToQueue: true,


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


    select(){
      return this.set('moreInfo',false)

    },

    // deSelect(){
    //
    // },
    //
    // inQueue{
    //
    // },
    //
    // deQueue{
    //
    // }


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
