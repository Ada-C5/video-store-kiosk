import Ember from 'ember';

export default Ember.Route.extend({
  model () {
    return ['Ghostbusters', 'Jurassic Park', 'Rashomon', 'The Sixth Sense', 'I, Robot', 'Legally Blonde', 'No Country For Old Men', 'Star Trek', 'Mean Girls', 'Pokemon The Movie 2000', 'Jaws', 'Hackerz', 'Fight Club', 'Castaway', 'Toy Story 2', 'Fargo']
  }
});
