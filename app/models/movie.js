import DS from 'ember-data';

export default DS.Model.extend({
  // id: DS.attr('number'),
  title: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('string'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string'),

  suspend(params) {
    const adapter = this.store.adapterFor("movies");
    console.log(adapter);
    return adapter.suspend(this, params);
  }
});
