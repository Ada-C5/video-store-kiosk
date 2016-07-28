import Ember from 'ember';

export default Ember.Controller.extend({

  page: 1,

  actions: {
    nextPage() {
      let page = this.get('page');
      this.set('page', page + 1);
    },

    prevPage() {
      this.set('page', this.get('page') - 1);
    }
  }

});
