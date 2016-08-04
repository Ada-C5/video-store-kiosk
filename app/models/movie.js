import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string'),
  year: Ember.computed('release_date', function() {
    return this.get('release_date').slice(0,4);
  })
});
