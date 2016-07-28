import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    clickNext() {
      this.click(console.log('next'));
    },
    clickPrev() {
      this.click(console.log('prev'));
    }
  }
});

