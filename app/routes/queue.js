import Ember from 'ember';

export default Ember.Route.extend({
});

//
//
// route - page
// export..
//   model(params) {
//     let page = Number(params.page) || 1
//     console.log("page params; ", params, page)
//     return this.store.query('movie', {page: page})
//     .then(function(movies) {
//       return {page: page, movie: movies}
//     })
//   }
//
//   returnTemplate(controller, model) {
//     this.render("application"),{
//     controller: this.controllerFor('application'),
//     model: model
//    })
//   }
