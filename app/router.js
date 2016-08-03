import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  // this.route('movie', function() {
  //   this.route('show', { path: '/:title' });
  // });
  this.route('movie');
  this.route('show', { path: '/:title' });
});

export default Router;
