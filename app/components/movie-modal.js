import Ember from 'ember';

export default Ember.Component.extend({
  movie: ['title', 'overview', 'release_date', 'inventory'],
  actions: {
    ok: function() {
      this.$('.modal').modal('hide');
      console.log("you're in the component");
      this.sendAction('ok');
    }
  }
  // show: function() {
  //   this.$('.modal').modal().on('hidden.bs.modal', function() {
  //     this.sendAction('close');
  //   }.bind(this));
  // }.on('didInsertElement')
});
