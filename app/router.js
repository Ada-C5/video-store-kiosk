import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

// Router.map(function() {
//   this.route('movies', { resetNamespace: true }, function(){}
//     {
//       this.route('movie', { resetNamespace: true, path: '/:movie_id' });
//     }
//   );
// });

export default Router.map(function() {
  this.route('movies', { resetNamespace: true }, function() {
    this.route('movie', { resetNamespace: true, path: '/:movie_id' });
  });
});


// export default Router;
