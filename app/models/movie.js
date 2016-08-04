import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  overview: DS.attr(),
  release_date: DS.attr(),
  inventory: DS.attr('number'),
  poster_filename: DS.attr(),
  selected: false,
  info: DS.attr('boolean', {defaultValue: false}),
  queue: false

});
