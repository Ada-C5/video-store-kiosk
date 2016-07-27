import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies');
  // this.resource('movies', function() {
  //   this.resource('movie', { path: '/:movie_id' });
  // });
});

export default Router;
