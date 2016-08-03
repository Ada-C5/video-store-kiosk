import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  poster_filename: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('date'),
  inventory: DS.attr('number'),
  selected: DS.attr('boolean', { defaultValue: false})
});
