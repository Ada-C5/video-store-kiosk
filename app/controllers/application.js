import Ember from 'ember';

export default Ember.Controller.extend({
  testMovie: "I am a movie",
  model(){
    return "this is where all the movies go"
  },
  actions: {
    getPage(){
      return "so many movies"
    }
  }
});


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
