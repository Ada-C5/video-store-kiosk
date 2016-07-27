import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['The Notebook', 'Idiocracy', 'Old School', 'Jaws', 'Office Space', 'Fight Club', 'Alien', 'Legally Blonde', 'Toy Story', 'Finding Nemo', 'Forrest Gump', 'Fargo', 'Finding Dory', 'Zootopia'];
  }
});
