import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  poster_filename: DS.attr('string')
});
