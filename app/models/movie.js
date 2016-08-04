import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('string'),
  title: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string')
});
