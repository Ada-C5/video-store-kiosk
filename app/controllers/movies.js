import Ember from 'ember';

export default Ember.Controller.extend({
  // actions: {
  //   searchThing: function() {
  //       let data = this.store.find("movie", '1');
  //       return data;
  //   }
    // this.store.find("movie", '1');

    // function() {
    //     let data = this.store.find("movie", '1');
    //     return data;
    // }
  // }
  queryParams: ['page', 'size'],
  page: 1,
  size: 10,
  // isExpanded: false,
  //

  actions: {
    next(params){
      console.log(params)
      return this.store.query('movie', {
        page: params,
        size: 10
      }
    );
  },
    // next: function() {
    //
    // },

    expand: function() {
      this.set('isExpanded', true);
    },

    contract: function() {
      this.set('isExpanded', false);
    }
  }

});
