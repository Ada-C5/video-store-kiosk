import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});
// path: 'MOVIE/:title'
Router.map(function() {
  this.route('movies', { path: '/' }, function() {
    this.route('movies', { path: '/:page' });
  });
});

export default Router;


// this.route('movies')
// this.route('page', { path: '/:page'}, function () {
//    this.route('queue')
// })
