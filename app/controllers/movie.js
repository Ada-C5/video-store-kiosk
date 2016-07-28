import Ember from 'ember';

export default Ember.Controller.extend({
  title: Ember.computed.readOnly('model.title'),
  releaseDate: Ember.computed.readOnly('model.releaseDate'),
  queue: []
  actions: {
    addToQueue(){
      this.add('name', newName);
    }
  }
});
