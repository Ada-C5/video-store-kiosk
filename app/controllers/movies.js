import Ember from 'ember';

export default Ember.Controller.extend({
  ajax: Ember.inject.service(),
  actions: {
    netxTen() {
      return this.get('ajax').request('http://localhost:3000/?page=3&size=10', {
        method: 'GET',
        data: {

        }
      });
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
