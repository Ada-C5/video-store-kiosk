import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(event) {
      // console.log('trying to select')
      let element = Ember.$(event.target)
      // console.log("element", element)
      element.toggleClass('selected')
    },
    info(){
      // console.log('info please')
      let element = Ember.$(event.target)
      element.toggleClass('info')
      let overview = this.$(element.parent().parent()).find('#deets')
      overview.toggleClass('show overview')
      // console.log("dog", overview)
      // overview.toggleClass('overview')
    },
    getPrev() {
      console.log('wtf')
      return this.$.getJSON('http://localhost:3000/?page=2')
    },
    getNext() {
      var yes = this.$('#container').data('page', 9)
      console.log('test', yes.data('page'))
    },
    getPage(page){
      return this.$.getJSON('http://localhost:3000/?page=4')
    },
  }
});
