import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  queque: [],

  actions: {
    nextPage() {
      if (this.page + 1 <= 10) {
        this.set("page", (this.page+1));
      }
    },
    previousPage() {
      if (this.page - 1 >= 1) {
        this.set("page", (this.page-1));
      }
    },
    // info(){
    //   console.log('info please')
    //   let element = Ember.$(event.target)
    //   element.toggleClass('movieInfo')
    //   let overview = $(element.parent().parent()).find('#deets')
    //   overview.toggleClass('show overview')
    //   // overview.toggleClass('overview')
    // }
  }
});
