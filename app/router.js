import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('movies', function() {
    this.resource('movie', { path: '/:title' });
  });
});

export default Router;
