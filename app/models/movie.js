import DS from 'ember-data';

export default DS.Model.extend({
 // id: DS.attr('integer'),
 title: DS.attr('string'),
 release_date: DS.attr('string'),
 overview: DS.attr('string'),
 inventory: DS.attr('string'),
 poster_filename: DS.attr('string'),
});
