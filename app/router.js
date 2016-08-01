import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('queue');
});

export default Router;

// 
// jeremys
// Router.map(function(){
//   this.route('movies')
//   this.route('page', {path '/:page'}, funciton(){
//     this.route('queue')
//   })
// })
