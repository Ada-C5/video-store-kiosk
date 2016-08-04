import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  action:{
    toggleDetails(){
      this.toggleProperty('isExpanded')
    },
    
  }
});
