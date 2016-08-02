import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'),
  poster_filename: DS.attr('string'),
  selected: DS.attr('string' , {default: "not-selected"})

});


// jeremys
// selected: DS.attr('boolean', {default: false})
// title: DS.attr() i'm assuming this defaults to string
// inventory: DS.attr('number')
