import Ember from 'ember';

export default Ember.Controller.extend({
  actions:{
    lessInfo(){
    this.transitionToRoute('movies')
    },
  }
});
