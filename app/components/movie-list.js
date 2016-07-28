import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    select(event) {
      // event.preventDefault();
      console.log('trying to select')
       let element = Ember.$(event.target)
      console.log("element", element)
      element.toggleClass('selected')
      // var parent = $(this).closest('.movie');
      // var otherwaytogetparent = $(this).parents('.movie');
      // console.log(otherwaytogetparent)
      // parent.addClass("selected")
    }
  }
});
