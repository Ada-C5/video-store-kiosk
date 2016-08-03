import Ember from 'ember';
import Resolver from './resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

let App;

Ember.MODEL_FACTORY_INJECTIONS = true;

App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  ready: function() {
    console.log("READY!")
    // start off the synopses as deselected
    // $('.description').attr('display', 'none') 
  },
  Resolver
});

loadInitializers(App, config.modulePrefix);

export default App;
