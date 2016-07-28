import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver
});

// routing to map to route movie.js -
App.Router.map(function() {
	this.route('movies', { path: '/' });
});

loadInitializers(App, config.modulePrefix);

export default App;
