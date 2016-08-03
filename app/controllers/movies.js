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

    lessInfo(){
      this.transitionToRoute('movies')
    },


    enQueue(title){
       this.set('model.q', this.get('model.q').addObject(title))
      console.log(this.get('model.q'))
    },

    deQueue(title){
      this.set('model.q', this.get('model.q').removeObject(title))

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
