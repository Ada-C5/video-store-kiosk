//put ajax(ember handled ajax for me) and js stuff in here!
import Ember from 'ember';

var $ = Ember.$;

$(function() { //Shorthand for document.ready
  $(document).on('click', '.movie-poster', function() {
    $(this).siblings('.modal').modal();
  })
  $('.movie-poster').on('click', function() {
    $(this).siblings('.modal').modal();
  })

})
