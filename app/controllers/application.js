import Ember from 'ember';

export default Ember.Controller.extend({
  testMovie: "I am a movie",
  model(){
    return "this is where all the movies go"
  },
  actions: {
    getMovies(){
      console.log('we are in the method "get movies"')
      $.ajax('http://localhost:3000/', {
        type: "GET"
      }).done(function(data, statusCode, xhrObject) {
        $('#movies').html('')
        console.log('in the done part')
        for (let movie of data) {
          console.log(movie.title)
          // $('#movies').append(makeMovieItem(movie))
        }
      })
    }
  },

  makeMovieItem(movie) {
    let item = $('<div></div>').addClass('movie')
    let title = data.title
    return item.html(title)
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
