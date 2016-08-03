import DS from 'ember-data';

export default DS.Model.extend({
  movieId: DS.attr('integer'),
  title: DS.attr('string'),
  release_date: DS.attr('string'),
  overview: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string'),
  year: Ember.computed('release_date', function() {
    return this.get('release_date').slice(0,4)
  })
});