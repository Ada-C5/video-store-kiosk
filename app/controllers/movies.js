import Ember from 'ember';

export default Ember.Controller.extend({

	// paging through movies
  queryParams: ['page', 'size'],
  page: 1,
  size: 5

});
