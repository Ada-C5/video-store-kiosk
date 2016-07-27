import Ember from 'ember';

export default Ember.Route.extend({
  model() {




    return $.ajax('http://localhost:3000/', {
    type: 'GET',
    data:{

    }
  })






  }
});
