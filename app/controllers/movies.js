import Ember from 'ember';

export default Ember.Controller.extend({
 queryParams: ['page', 'size'],
 page: 1,
 size: 10,
 actions: {
    pageForward() {
      let nextPage = this.page + 1;
      this.set("page", nextPage);
    },

    pageBack() {
      let prevPage
      if (this.page === 1) {
        prevPage = 1
      } else {
        prevPage = this.page - 1
      }
      this.set("page", (prevPage));
    },

    toggleSelected() {
      console.log(this);
      this.toggleProperty('selected');
    }
  }
});
