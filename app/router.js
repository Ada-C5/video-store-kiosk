import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

export default Router.map(function() {
  this.resource('movies', { resetNamespace: true }, function() {
    this.resource('movie', { resetNamespace: true, path: '/:movie_id' });
  });
});
