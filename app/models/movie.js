import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('text'),
  releaseDate: DS.attr('date'),
  inventory: DS.attr('integer'),
  posterFilename: DS.attr('string')
});
