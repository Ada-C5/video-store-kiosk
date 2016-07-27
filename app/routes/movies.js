import Ember from 'ember';

export default Ember.Route.extend({
    model(){
    // return ["Alien", "Jaws", "Speed", "Finding Nemo", "Star Wars", "Finding Dory"]

    return this.store.findAll('movie')
    // return this.store.find('movie', "Jaws")
  }
});


