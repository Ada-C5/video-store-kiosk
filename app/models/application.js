import DS from 'ember-data';

export default DS.Model.extend({
  makeMovieItem(movie) {
    let item = $('<div></div>').addClass('movie')
    let title = data.title
    return item.html(title)
  }
});
