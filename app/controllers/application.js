import Ember from 'ember';

export default Ember.Controller.extend({
  page: 1,
  actions: {
    getPrev() {
        if (this.page > 1) {
          this.set('page', (this.page - 1))
        }
    },
    getNext() {
      if (this.page < 10) {
        this.set('page', (this.page + 1))
      }
    }
  }
});




// function getPage(pageNumber) {
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



// event.preventDefault();
// $.ajax('http://localhost:3000/?page=4', {
//     type: "GET",
//   }).done(function(data, statusCode, xhrObject){
//     $('#container').html('')
//     for (let item of data) {
//     var divs = $('#container').append($('<div><img src""></div>').addClass('movie'))
//    }
//    var movies = divs.children()
//    console.log(movies)
//    for (let mov of movies) {
//      mov.attr('src', "http://localhost:3000/images/posters/alien.jpg")
//  }
//    $('#container').data('page', 3)
//     // console.log(data)
//     return data
//   })
