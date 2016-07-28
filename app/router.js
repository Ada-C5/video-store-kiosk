import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

export default Router.map(function() {
  this.resource('movies')
  this.resource('movie', { path: 'movies/:movie_id' });
  });
