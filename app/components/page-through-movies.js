import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clickNext() {
      console.log('next');
      nextPage();
    },
    clickPrev() {
      (console.log('prev'));
      prevPage();
    }
  }
});
