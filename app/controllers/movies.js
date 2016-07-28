import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,

  ajax: Ember.inject.service(),
  actions: {
    nextTen() {
    let nextPage = this.page + 1
    this.set('page', nextPage)
    },

    previousTen() {
      return this.get('ajax').request('http://localhost:3000/?page=1&size=10', {
        method: 'GET',
        data: {

        }
      }).then(function(results){this.set('model', results)}.bind(this))
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
