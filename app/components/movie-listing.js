import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  movieAdded: false,
  actions: {
    toggleDetails() {
      this.toggleProperty('isExpanded');
      // toggleproperty is something components knows about automatically
    },
    toggleDeets() {
      this.toggleProperty('movieAdded');
    },
    addToQueue(movie) {
      // send the action addtoqueue and pass it the movie, and what is addtoqueue? youve defined it in the template. the template is it defined in, tells it which controller to go to...bc ember is weird
      this.sendAction('addToQueue', movie);
      this.toggleProperty('isExpanded');
      // alert("Movie was added to Queue!");
      this.toggleProperty('movieAdded');

    }

  }
});
