import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ['Harry Potter', 'Lord of the Rings', 'Coraline', 'The Lion King', 'Star Wars', 'Mirror Mask', 'The Secret Garden'];
  }
});
