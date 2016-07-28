import Ember from 'ember';

export default Ember.Controller.extend({

	// paging through movies
  // queryParams: ['page', 'size'],
  // page: 1,
  // size: 5

  App.ClickableView = Ember.View.extend({
  click: function(evt) {
    this.get('controller').send('turnItUp', 11);
  }
});

});
