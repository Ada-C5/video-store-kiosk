// import DS from 'ember-data';
//
// export default DS.RESTSerializer.extend({
// normalizePayload: function(movieitem) {
//     return {
//         'data': [{
//           'type': 'movies',
//           'attributes': {
//           'title': movieitem.title,
//           'overview': movieitem.overview,
//           'releaseDate': movieitem.release_date,
//           'inventory': movieitem.inventory,
//           'posterFilename': movieitem.poster_filename
//           }
//         }]
//       }
//     }
// });

import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
 keyForAttribute: function(attr) {
   return Ember.String.underscore(attr);
 }
});
