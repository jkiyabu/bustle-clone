import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  img: DS.attr(),
  description: DS.attr(),
  story: DS.attr()
});
