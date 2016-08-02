import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    // select(event) {
      // let element = Ember.$(event.target)
      // element.toggleClass('selected')

    // },
    addToQueue(movie) {
      this.sendAction('addToQueue', movie)
    },
    info(){
      let element = Ember.$(event.target)
      element.toggleClass('info')
      let overview = this.$(element.parent().parent()).find('#deets')
      overview.toggleClass('show overview')
    },
  }
});
