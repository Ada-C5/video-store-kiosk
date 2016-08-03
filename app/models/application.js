import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'),
  poster_filename: DS.attr('string'),
  selected: DS.attr('string' , {default: "not-selected"}),
  miniOverview: Ember.computed('overview', function() {
    return this.get('overview').slice(0,245) 
  })
});
