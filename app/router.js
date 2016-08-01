// import Ember from 'ember';
// import config from './config/environment';

// const Router = Ember.Router.extend({
//   location: config.locationType,
//   rootURL: config.rootURL
// });

// Router.map(function() {
//   this.resource('movies', function() {
//     this.resource('movie-selected', { path: '/:movie_title'})
//   })
//   // this.route('movies');
//   // this.route('page', {path: '/:page'}, function(){
//     // this.route('queue')
//   // })
//   // this.route('movie-selected');
// });

// export default Router;

// // dynamic routing with pages 

import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('movies', {path: ''});
});

export default Router;