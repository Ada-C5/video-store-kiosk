import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  overview: DS.attr('string'),
  release_date: DS.attr('date'),
  inventory: DS.attr('number'),
  poster_filename: DS.attr('string'),

  suspend() {
    const adapter = this.store.adapterFor(this.constructor.modelName);
    return adapter.suspend(this);
  }
  
});
