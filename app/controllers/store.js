// import Ember from 'ember';
//
// export default Ember.Controller.extend({
//   model() {
//     return "damn it i'm in the model"
//   },
//   movies: "moovies. flicks. lots of 'em.",
//   actions: {
//     movieTest: function() {
//       $.ajax('http://localhost:3000/', {
//         type: "GET",
//         data: {
//           page: 1,
//         }
//       })
//     },
//     getMoreMovies: function() {
//         // this.$("#test").fadeIn("slow");
//     }
//   }
// });


// function getPage(pageNumber) {
//   $.ajax('http://localhost:3000/songs', {
//     type: "GET",
//     data: {
//       page: pageNumber,
//     }
//   }).done(function(data, statusCode, xhrObject) {
//     $('#songs').html('')
//     for (let item of data) {
//       $('#songs').append(makeSongItem(item))
//     }
//     $('#songs').data('current-page', pageNumber)
//     $('#songs').attr("start", (pageNumber - 1) * 25 + 1);
//   })
// }
