import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return $.getJSON('http://localhost:3000')
  }
 //  model() {
 //    var movies = []
 //    $.ajax('http://localhost:3000/', {
 //      type: "GET"
 //    }).done(function(data, statusCode, xhrObject) {
 //      $('#movies').html('')
 //      console.log(data)
 //      // console.log('in the done part')
 //      for (let movie of data) {
 //        // console.log(movie.title)
 //        movies.push(movie.title)
 //        // $('#movies').append(makeMovieItem(movie))
 //      }
 //      // return movies
 //      // console.log('movies go here', movies)
 //      return movies
 //    })
 //    // return ["Aretha Franklin", "Louis Armstrong", "Louis Jordan"];
 // }
});
