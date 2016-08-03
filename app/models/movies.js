import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(''),
  overview: DS.attr(''),
  release_date: DS.attr('date'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('')
});

// selected: DS.attr('boolean', {defaultValue: false})
