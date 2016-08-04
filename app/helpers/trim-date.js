import Ember from 'ember';

export default Ember.Helper.extend({
  trimDate(passedDate) {
    var theDate = passedDate.substring(0,15);
    return new Ember.Handlebars.SafeString(theDate) ;
  }
})

// Handlebars.registerHelper('trimDate', function(passedDate) {
//     var theDate = passedDate.substring(0,15);
//     return new Handlebars.SafeString(theDate)
// });
