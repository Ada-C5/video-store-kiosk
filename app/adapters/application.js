import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'https://localhost:3000/'
});


App.ApplicationAdapter = DS.RESTAdapter.extend({
  host: 'https://localhost:3000'
});
